import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { setRequestLocale, getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import Script from "next/script"
import { routing } from "@/i18n/routing"
import { Providers } from "./providers"
import { Nav } from "@/components/Nav"
import { WhatsAppFab } from "@/components/WhatsAppFab"
import { JsonLd } from "@/components/JsonLd"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const RTL_LOCALES = ["he"]

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    metadataBase: new URL("https://a7advisory.ai"),
    title: "Guy Assedou — Fractional CPO & Strategic Product Advisor",
    description:
      "Driving ARR, NRR, and ACV growth through sharper bets, faster execution, and AI-native products and workflows. 15+ years scaling B2B SaaS from early stage to $1B+ ARR.",
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: { en: "/", he: "/he" },
    },
    openGraph: {
      title: "Guy Assedou — Fractional CPO & Strategic Product Advisor",
      description:
        "Driving ARR, NRR, and ACV growth through sharper bets, faster execution, and AI-native products and workflows. 15+ years scaling B2B SaaS from early stage to $1B+ ARR.",
      url: "https://a7advisory.ai",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "A7 Advisory" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Guy Assedou — Fractional CPO & Strategic Product Advisor",
      description:
        "Driving ARR, NRR, and ACV growth through sharper bets, faster execution, and AI-native products and workflows.",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const messages = await getMessages()
  const dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={dir} className={inter.variable}>
      <head>
        <JsonLd />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-[6px] focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Nav />
            <main id="main-content">{children}</main>
            <WhatsAppFab />
          </Providers>
        </NextIntlClientProvider>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
