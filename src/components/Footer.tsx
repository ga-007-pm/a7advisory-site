"use client"

import { useTranslations } from "next-intl"
import { LucideLinkedin, MessageCircle } from "lucide-react"
import { Logo } from "./Logo"
import { LINKEDIN_URL, WHATSAPP_URL } from "@/lib/constants"

const NAV_LINKS = [
  { label: "Services", href: "#offerings" },
  { label: "Impact",   href: "#proof" },
  { label: "Guy",      href: "#about" },
  { label: "FAQ",      href: "#faq" },
]

const COL_HEADING = "text-[10px] font-bold uppercase tracking-[0.14em] mb-5"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "#08080E", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="section-inner py-10">

        {/* Three-column grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">

          {/* Col 1 — Brand */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-3 text-[13px] font-medium" style={{ color: "rgba(240,237,255,0.7)" }}>
              Guy Assedou
            </p>
            <p
              className="mt-1 text-[14px] leading-relaxed"
              style={{ color: "rgba(240,237,255,0.6)" }}
            >
              {t("tagline")}
            </p>
          </div>

          {/* Col 2 — Navigate */}
          <div>
            <p className={COL_HEADING} style={{ color: "#6E7294" }}>
              {t("nav_heading")}
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-light/70 transition-colors duration-200 hover:text-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Follow */}
          <div>
            <p className={COL_HEADING} style={{ color: "#6E7294" }}>
              {t("follow_heading")}
            </p>
            <div className="flex gap-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white"
              >
                <LucideLinkedin size={16} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <p
          className="mt-10 text-[12px]"
          style={{ color: "rgba(240,237,255,0.3)" }}
        >
          {t("copyright")}
        </p>

      </div>
    </footer>
  )
}

