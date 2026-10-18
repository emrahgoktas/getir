import { createHash, timingSafeEqual } from "node:crypto";
import { parseHttpsOrigin } from "../domain/page-url";
import type { TenantScope } from "../domain/ports";

export type PageFeedEnv = {
  readonly PAGE_FEED_ACCESS_KEY?: string;
  readonly PAGE_FEED_TENANT_ID?: string;
  readonly PAGE_FEED_ORIGIN?: string;
  readonly PAGE_FEED_CACHE_TTL_SECONDS?: string;
  readonly PAGE_FEED_MAX_CACHE_BYTES?: string;
  readonly PAGE_FEED_MAX_FEED_BYTES?: string;
};
const TENANT_ID = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
const MIN_ACCESS_KEY_LENGTH = 16;

export type TenantRecord = TenantScope & {
  readonly accessKey: string;
};

export class TenantRegistry {
  constructor(private readonly tenants: ReadonlyMap<string, TenantRecord>) {}

  get size(): number {
    return this.tenants.size;
  }

  ids(): readonly string[] {
    return [...this.tenants.keys()];
  }

  find(tenantId: string): TenantRecord | null {
    return this.tenants.get(tenantId) ?? null;
  }
}

/**
 * One deployment maps to one tenant record from the environment.
 * An empty registry means the feed is not configured and must stay closed.
 */
export function loadTenantRegistry(env: PageFeedEnv, defaultOrigin: string): TenantRegistry {
  const id = env.PAGE_FEED_TENANT_ID?.trim() || "getircilingir";
  const accessKey = env.PAGE_FEED_ACCESS_KEY?.trim() ?? "";
  const origin = parseHttpsOrigin(env.PAGE_FEED_ORIGIN?.trim() || defaultOrigin);

  if (!TENANT_ID.test(id) || accessKey.length < MIN_ACCESS_KEY_LENGTH || !origin) {
    return new TenantRegistry(new Map());
  }

  const record: TenantRecord = { id, origin, accessKey };
  return new TenantRegistry(new Map([[id, record]]));
}

export type AuthDecision =
  | { ok: true; tenant: TenantScope }
  | { ok: false; status: 400 | 401 | 404 | 503; error: string };

export function authorizeFeedRequest(input: {
  tenantId: string | null;
  queryKey: string | null;
  authorization: string | null;
  registry: TenantRegistry;
}): AuthDecision {
  if (input.registry.size === 0) {
    return { ok: false, status: 503, error: "feed_not_configured" };
  }

  const tenantId = input.tenantId?.trim() ?? "";
  if (!tenantId) return { ok: false, status: 400, error: "tenant_required" };
  if (!TENANT_ID.test(tenantId)) {
    return { ok: false, status: 404, error: "unknown_tenant" };
  }

  const tenant = input.registry.find(tenantId);
  if (!tenant) {
    const provided = readBearer(input.authorization) ?? input.queryKey?.trim() ?? "";
    keysMatch(provided, "page-feed-unknown-tenant");
    return { ok: false, status: 404, error: "unknown_tenant" };
  }

  const bearer = readBearer(input.authorization);
  const queryKey = input.queryKey?.trim() || null;
  if (queryKey && bearer && !keysMatch(queryKey, bearer)) {
    return { ok: false, status: 401, error: "unauthorized" };
  }

  const provided = bearer ?? queryKey;
  if (!provided || !keysMatch(provided, tenant.accessKey)) {
    return { ok: false, status: 401, error: "unauthorized" };
  }

  return { ok: true, tenant: { id: tenant.id, origin: tenant.origin } };
}

function readBearer(authorization: string | null): string | null {
  if (!authorization) return null;
  const match = /^Bearer\s+(\S+)\s*$/i.exec(authorization);
  return match?.[1] ?? null;
}

function keysMatch(provided: string, expected: string): boolean {
  const left = createHash("sha256").update(provided).digest();
  const right = createHash("sha256").update(expected).digest();
  return timingSafeEqual(left, right);
}
