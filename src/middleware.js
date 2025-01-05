import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Redirect to login if token is invalid or missing
  if (!token || !token.id) {
    return NextResponse.redirect(new URL("api/auth/login", req.nextUrl.origin));

  }

  return NextResponse.next();
}

// Apply middleware to protected routes
export const config = {
  matcher: ["/admin/:path*"],
};
