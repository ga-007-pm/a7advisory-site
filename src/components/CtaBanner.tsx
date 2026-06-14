"use client"

import { useTranslations } from "next-intl"
import { Button } from "./Button"
import { CALENDLY_URL } from "@/lib/constants"

export function CtaBanner() {
  const t = useTranslations("cta")

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      style={{ backgroundColor: "#08080E" }}
    >
      <div className="section-inner section-py">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundColor: "#1A1A22",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "var(--radius-cta)",
            padding: "80px 56px",
          }}
        >
          {/* Purple glow — top-left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 20% 30%, rgba(140,82,255,0.30), transparent 60%)",
            }}
          />

          {/* Amber glow — bottom-right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full"
            style={{
              bottom: "-88px",
              right: "-88px",
              width: "420px",
              height: "420px",
              background: "radial-gradient(closest-side, rgba(255,145,77,0.22), transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative max-w-2xl">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl font-semibold tracking-tight"
              style={{ color: "#F0EDFF" }}
            >
              {t("heading")}
            </h2>
            <p
              className="mt-5 text-[17px] leading-relaxed"
              style={{ color: "rgba(240,237,255,0.65)" }}
            >
              {t("body")}
            </p>
            <div className="mt-10">
              <Button variant="primary" href={CALENDLY_URL} innerBg="#1A1A22">
                {t("btn")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
