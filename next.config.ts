import createNextIntlPlugin from "next-intl/plugin"
import type { NextConfig } from "next"

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

// Hebrew translation is not ready yet — redirect /he to English.
// Remove this block when the Hebrew version is ready to launch.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/he",
        destination: "/",
        permanent: false,
      },
      {
        source: "/he/:path*",
        destination: "/:path*",
        permanent: false,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
