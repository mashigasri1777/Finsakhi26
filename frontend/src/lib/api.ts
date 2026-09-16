export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(status: number, message: string, data?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = path.startsWith("/api") ? path : `/api${path.startsWith("/") ? path : `/${path}`}`;
  
  const headers = new Headers(options.headers || {});
  if (!headers.has("Content-Type") && options.body && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  let data: unknown;
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    try {
      data = await response.json();
    } catch {
      data = null;
    }
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const message =
      typeof data === "object" && data && "detail" in data
        ? Array.isArray((data as { detail: unknown }).detail)
          ? JSON.stringify((data as { detail: unknown }).detail)
          : String((data as { detail: unknown }).detail)
        : `Request failed with status ${response.status}`;
    throw new ApiError(response.status, message, data);
  }

  return data as T;
}

export function apiGet<T>(path: string, options?: RequestInit): Promise<T> {
  return request<T>(path, { ...options, method: "GET" });
}

export function apiPost<T>(path: string, body?: unknown, options?: RequestInit): Promise<T> {
  return request<T>(path, {
    ...options,
    method: "POST",
    body: body !== undefined ? (typeof body === "string" ? body : JSON.stringify(body)) : undefined,
  });
}

export function apiPut<T>(path: string, body?: unknown, options?: RequestInit): Promise<T> {
  return request<T>(path, {
    ...options,
    method: "PUT",
    body: body !== undefined ? (typeof body === "string" ? body : JSON.stringify(body)) : undefined,
  });
}

export function apiPatch<T>(path: string, body?: unknown, options?: RequestInit): Promise<T> {
  return request<T>(path, {
    ...options,
    method: "PATCH",
    body: body !== undefined ? (typeof body === "string" ? body : JSON.stringify(body)) : undefined,
  });
}

export function apiDelete<T>(path: string, options?: RequestInit): Promise<T> {
  return request<T>(path, { ...options, method: "DELETE" });
}
