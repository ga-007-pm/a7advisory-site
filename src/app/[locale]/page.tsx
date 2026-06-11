import { setRequestLocale } from "next-intl/server"
import { Hero } from "@/components/Hero"
import { Logos } from "@/components/Logos"
import { Offerings } from "@/components/Offerings"

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
    </main>
  )
}
