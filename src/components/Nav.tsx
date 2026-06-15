"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Logo } from "./Logo"
import { Button } from "./Button"
import { WhatsAppButton } from "./WhatsAppButton"
import { openCalendly } from "@/lib/calendly"

const NAV_LINKS = [
  { label: "Services", href: "#offerings" },
  { label: "Impact",   href: "#proof" },
  { label: "Guy",      href: "#about" },
  { label: "FAQ",      href: "#faq" },
]

export function Nav() {
  const t = useTranslations("nav")

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16 backdrop-blur-md border-b border-white/10"
      style={{ backgroundColor: "rgba(8,8,14,0.72)" }}
    >
      <div className="section-inner h-full flex items-center justify-between">

        <Link
          href="/"
          aria-label="A7 Advisory — home"
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: "rgba(240,237,255,0.65)" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-[#F0EDFF]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <WhatsAppButton label={t("whatsapp_label")} />
          <Button variant="primary" onClick={openCalendly}>
            {t("cta")}
          </Button>
        </div>

      </div>
    </nav>
  )
}
