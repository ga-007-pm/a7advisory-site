import { setRequestLocale } from "next-intl/server"
import { Hero } from "@/components/Hero"
import { Logos } from "@/components/Logos"
import { Offerings } from "@/components/Offerings"
import { Metrics } from "@/components/Metrics"
import { About } from "@/components/About"
import { Faq } from "@/components/Faq"
import { CtaBanner } from "@/components/CtaBanner"
import { Footer } from "@/components/Footer"

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <Hero />
      <Logos />
      <Offerings />
      <Metrics />
      <About />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
  )
}
