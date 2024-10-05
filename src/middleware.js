export { default } from "next-auth/middleware";

export const config = { 
  matcher: [
    '/admin/:path*',  // Works for dynamic admin paths
       
  ]
};
