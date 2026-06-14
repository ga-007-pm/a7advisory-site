"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Logo } from "./Logo"
import { Button } from "./Button"
import { WhatsAppButton } from "./WhatsAppButton"
import { CALENDLY_URL, LINKEDIN_URL, EMAIL, PHONE_URL, PHONE_DISPLAY } from "@/lib/constants"

const NAV_LINKS = [
  { label: "Services", href: "#offerings" },
  { label: "Impact", href: "#proof" },
  { label: "Guy", href: "#about" },
  { label: "FAQ", href: "#faq" },
]

const ICON_CLASS =
  "grid h-9 w-9 place-items-center rounded-md border border-white/15 text-white/60 transition-colors duration-200 hover:border-white/40 hover:text-white/90"

export function Nav() {
  const t = useTranslations("nav")

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16 backdrop-blur-md border-b border-white/10"
      style={{ backgroundColor: "rgba(8,8,14,0.72)" }}
    >
      <div className="section-inner h-full flex items-center justify-between">

        <Link href="/" aria-label="A7 Advisory — home">
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

        <div className="flex items-center gap-2">

          {/* Contact icons */}
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={ICON_CLASS}>
            <LinkedInIcon />
          </a>
          <a href={EMAIL} aria-label="Send email" className={ICON_CLASS}>
            <EmailIcon />
          </a>
          <a href={PHONE_URL} aria-label={`Call ${PHONE_DISPLAY}`} className={ICON_CLASS}>
            <PhoneIcon />
          </a>
          <WhatsAppButton label={t("whatsapp_label")} />

          <div className="ml-1">
            <Button variant="primary" href={CALENDLY_URL}>
              {t("cta")}
            </Button>
          </div>
        </div>

      </div>
    </nav>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}
