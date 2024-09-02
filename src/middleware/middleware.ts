import { NextRequest, NextResponse } from 'next/server';

// const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const RATE_LIMIT = 100; // Number of requests allowed
const TIME_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// In-memory store for rate limiting (for demonstration purposes)
const requestCounts: Record<string, { count: number; timestamp: number }> = {};

// Rate limiting middleware function
function rateLimiter(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  
  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, timestamp: now };
  } else {
    const { count, timestamp } = requestCounts[ip];
    
    if (now - timestamp < TIME_WINDOW) {
      if (count >= RATE_LIMIT) {
        return new NextResponse('Rate limit exceeded', { status: 429 });
      }
      requestCounts[ip].count += 1;
    } else {
      requestCounts[ip] = { count: 1, timestamp: now };
    }
  }
  
  return null;
}

// CORS Middleware function
function handleCors(req: NextRequest) {
  const origin = req.headers.get('origin');
  const allowedOrigins = ['https://example.com', 'https://anotherdomain.com'];

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse('CORS not allowed', { status: 403 });
  }

  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', origin || '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return response;
}

// Authentication Middleware function
function authenticate(req: NextRequest) {
  const token = req.headers.get('authorization');
  
  // Basic token authentication (Replace with your authentication logic)
  if (!token || token !== 'Bearer my-secret-token') {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  
  return null;
}

// Middleware Handler
export async function middleware(req: NextRequest) {
  // Rate Limiting
  const rateLimitResponse = rateLimiter(req);
  if (rateLimitResponse) return rateLimitResponse;

  // CORS Handling
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  // Authentication
  const authResponse = authenticate(req);
  if (authResponse) return authResponse;
  
  // If all checks pass, proceed to the next middleware or route handler
  return NextResponse.next();
}

// Export configuration for applying middleware to specific routes
export const config = {
  matcher: ['/api/:path*', '/protected/:path*'], // Apply middleware to API routes
};
