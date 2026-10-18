import { handlePageFeedRequest } from "@/modules/page-feed/infrastructure/http-handler";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export function GET(request: Request) {
  return handlePageFeedRequest(request);
}
