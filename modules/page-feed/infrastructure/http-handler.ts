import { FeedTooLargeError, type FeedSnapshot } from "../application/page-feed-service";
import { getPageFeedRuntime, type PageFeedRuntime } from "./composition";
import { authorizeFeedRequest } from "./tenant-registry";

const STREAM_CHUNK_BYTES = 64 * 1024;

export async function handlePageFeedRequest(
  request: Request,
  runtime: PageFeedRuntime = getPageFeedRuntime(),
): Promise<Response> {
  const url = new URL(request.url);
  const decision = authorizeFeedRequest({
    tenantId: url.searchParams.get("tenant"),
    queryKey: url.searchParams.get("key"),
    authorization: request.headers.get("authorization"),
    registry: runtime.registry,
  });

  if (!decision.ok) return jsonError(decision.status, decision.error);

  try {
    const feed = await runtime.service.getFeed(decision.tenant);
    const headers = feedHeaders(feed, runtime.cacheTtlSeconds);

    if (request.headers.get("if-none-match") === feed.etag) {
      headers.delete("Content-Length");
      return new Response(null, { status: 304, headers });
    }

    return new Response(streamBytes(feed.body), { status: 200, headers });
  } catch (error) {
    if (error instanceof FeedTooLargeError) return jsonError(413, "feed_too_large");
    console.error("page-feed export failed", error);
    return jsonError(500, "feed_failed");
  }
}

function feedHeaders(feed: FeedSnapshot, ttlSeconds: number): Headers {
  const remainingSeconds = Math.max(
    0,
    Math.min(ttlSeconds, Math.ceil((feed.expiresAt - Date.now()) / 1000)),
  );

  return new Headers({
    "Content-Type": "text/csv; charset=utf-8",
    "Content-Disposition": 'inline; filename="page-feed.csv"',
    "Content-Length": String(feed.body.byteLength),
    ETag: feed.etag,
    "Cache-Control": `private, max-age=${remainingSeconds}`,
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
    "X-Feed-Rows": String(feed.rowCount),
    "X-Feed-Skipped": String(feed.skipped),
    "X-Feed-Cache": feed.fromCache ? "hit" : "miss",
  });
}

function streamBytes(body: Uint8Array): ReadableStream<Uint8Array> {
  let offset = 0;
  return new ReadableStream({
    pull(controller) {
      if (offset >= body.byteLength) {
        controller.close();
        return;
      }
      const end = Math.min(offset + STREAM_CHUNK_BYTES, body.byteLength);
      controller.enqueue(body.subarray(offset, end));
      offset = end;
    },
  });
}

function jsonError(status: number, error: string): Response {
  return new Response(JSON.stringify({ error }), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
    },
  });
}
