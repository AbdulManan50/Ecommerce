// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // Custom middleware logic (optional)
  function middleware(req) {
    // You can add role-based logic or logging here if needed
    console.log("✅ Middleware triggered:", req.nextUrl.pathname);
  },
  {
    callbacks: {
      // ✅ This runs before allowing access
      authorized: ({ token }) => {
        // Only allow access if user is logged in (has token)
        return !!token;
      },
    },
  }
);

// ✅ Define which routes to protect
export const config = {
  matcher: [
    "/dashboard/:path*",  // protect dashboard pages
    "/profile/:path*",    // protect profile pages
    "/settings/:path*",   // protect settings pages
  ],
};
