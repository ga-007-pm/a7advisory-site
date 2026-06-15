import { NextRequest, NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

const intlMiddleware = createMiddleware(routing)

// Hebrew translation is not ready yet — redirect /he/* to English.
// Remove the /he block when Hebrew is ready to launch.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/he" || pathname.startsWith("/he/")) {
    const url = request.nextUrl.clone()
    url.pathname = pathname === "/he" ? "/" : pathname.slice(3) || "/"
    const response = NextResponse.redirect(url, 307)
    // Pin locale to English so next-intl doesn't re-detect Hebrew and loop
    response.cookies.set("NEXT_LOCALE", "en", { path: "/", sameSite: "lax" })
    return response
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
