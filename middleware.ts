import type { NextRequest } from 'next/server'
 
// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/dashboard:path*',
}
 
export function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  
}