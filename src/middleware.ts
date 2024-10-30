import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT = 100;
const TIME_WINDOW = 60 * 60 * 1000;

const requestCounts: Record<string, { count: number; timestamp: number }> = {};

function rateLimiter(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();

  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, timestamp: now };
  } else {
    const { count, timestamp } = requestCounts[ip];

    if (now - timestamp < TIME_WINDOW) {
      if (count >= RATE_LIMIT) {
        return new NextResponse("Rate limit exceeded", { status: 429 });
      }
      requestCounts[ip].count += 1;
    } else {
      requestCounts[ip] = { count: 1, timestamp: now };
    }
  }

  return null;
}

function handleCors(req: NextRequest) {
  const origin = req.headers.get("origin");
  const allowedOrigins = [
    "http://localhost:3000",
  ];

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse("CORS not allowed", { status: 403 });
  }

  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", origin || "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return response;
}

function authenticate(req: NextRequest) {
  const token = req.headers.get("authorization");

  if (!token || token !== "Bearer my-secret-token") {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return null;
}

export async function middleware(req: NextRequest) {
  const rateLimitResponse = rateLimiter(req);
  if (rateLimitResponse) return rateLimitResponse;

  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method === "OPTIONS") {
    return NextResponse.next();
  }

  const authResponse = authenticate(req);
  if (authResponse) return authResponse;

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/protected/:path*"],
};
