import { setRequestLocale } from "next-intl/server"
import dynamic from "next/dynamic"
import { Hero } from "@/components/Hero"
import { Logos } from "@/components/Logos"

const Offerings = dynamic(() => import("@/components/Offerings").then((m) => ({ default: m.Offerings })))
const Metrics = dynamic(() => import("@/components/Metrics").then((m) => ({ default: m.Metrics })))
const About = dynamic(() => import("@/components/About").then((m) => ({ default: m.About })))
const Faq = dynamic(() => import("@/components/Faq").then((m) => ({ default: m.Faq })))
const CtaBanner = dynamic(() => import("@/components/CtaBanner").then((m) => ({ default: m.CtaBanner })))
const Footer = dynamic(() => import("@/components/Footer").then((m) => ({ default: m.Footer })))

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
