import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const getToken = request.cookies.get("token")
  if (getToken) {
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: ["/chapters/:path*", "/dashboard/:path*"],
}
