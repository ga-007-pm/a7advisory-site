"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Logo } from "./Logo"
import { Button } from "./Button"
import { WhatsAppButton } from "./WhatsAppButton"
import { CALENDLY_URL } from "@/lib/constants"

export function Nav() {
  const t = useTranslations("nav")
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const NAV_H = 64

    const update = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-nav-theme]")
      )
      let current: HTMLElement | null = null
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= NAV_H) {
          current = section
        } else {
          break
        }
      }
      setIsDark(!current || current.getAttribute("data-nav-theme") === "dark")
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16 backdrop-blur-md transition-colors duration-300"
      style={{
        backgroundColor: isDark ? "rgba(8,8,14,0.82)" : "rgba(244,243,250,0.90)",
        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"}`,
      }}
    >
      <div className="section-inner h-full flex items-center justify-between">

        <Link href="/" aria-label="A7 Advisory — home">
          <Logo isDark={isDark} />
        </Link>

        <div className="flex items-center gap-3">
          <WhatsAppButton label={t("whatsapp_label")} />
          <Button variant="primary" href={CALENDLY_URL}>
            {t("cta")}
          </Button>
        </div>

      </div>
    </nav>
  )
}
