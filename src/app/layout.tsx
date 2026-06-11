// Root layout — html/body provided by [locale]/layout.tsx for dynamic lang/dir support.
// This thin wrapper is required by Next.js App Router.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
