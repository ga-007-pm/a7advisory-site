import { NextRequest, NextResponse } from "next/server"

// Hebrew translation is not ready yet — redirect /he/* to English.
// Remove this file (or the redirect block) when Hebrew is ready to launch.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/he" || pathname.startsWith("/he/")) {
    const url = request.nextUrl.clone()
    url.pathname = pathname === "/he" ? "/" : pathname.slice(3) || "/"
    return NextResponse.redirect(url, 307)
  }
}

export const config = {
  matcher: ["/he", "/he/:path*"],
}
