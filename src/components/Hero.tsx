"use client"

import { useTranslations } from "next-intl"
import { Button } from "./Button"
import { RotatingSlot } from "./RotatingSlot"
import { CALENDLY_URL } from "@/lib/constants"

export function Hero() {
  const t = useTranslations("hero")
  const slot1 = t.raw("slot1") as string[]
  const slot2 = t.raw("slot2") as string[]

  const gradientText: React.CSSProperties = {
    background: "linear-gradient(90deg, #8c52ff 0%, #a86bff 48%, #e08448 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }

  return (
    <section
      id="hero"
      data-nav-theme="dark"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#08080E" }}
    >
      {/* 3px gradient topbar */}
      <div
        aria-hidden
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #8c52ff 0%, #a86bff 48%, #e08448 100%)",
        }}
      />

      {/* Purple glow — top-left. Dimensions match style-y.html exactly. DO NOT TOUCH. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-140px",
          left: "-100px",
          width: "640px",
          height: "540px",
          background: "radial-gradient(ellipse at center, rgba(140,82,255,0.26) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Amber glow — bottom-right. Dimensions match style-y.html exactly. DO NOT TOUCH. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-80px",
          width: "520px",
          height: "420px",
          background: "radial-gradient(ellipse at center, rgba(255,145,77,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Content — pt clears fixed nav (56px mobile / 64px desktop) + 88px reference spacing */}
      <div
        className="section-inner relative z-10 pt-36 md:pt-[152px] pb-24"
      >
        {/* Eyebrow */}
        <p
          className="relative mb-6 text-[12px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#6E7294" }}
        >
          {t("eyebrow")}
        </p>

        {/* H1 — only "leverage" gets gradient text */}
        <h1
          className="relative mb-7 max-w-[720px] text-[40px] font-extrabold leading-none tracking-[-0.035em] md:text-[52px] lg:text-[62px]"
          style={{ color: "#F0EDFF" }}
        >
          Turn product into{" "}
          <span style={gradientText}>leverage.</span>
        </h1>

        {/* Animated subtitle — muted surrounding text, white rotating words */}
        <div
          className="relative mb-10 flex flex-wrap items-start"
          style={{
            color: "#6E7294",
            fontSize: "17px",
            lineHeight: "1.65",
            gap: "0 0.3em",
            maxWidth: "580px",
          }}
        >
          <span>{t("sub_prefix")}</span>
          <RotatingSlot items={slot1} interval={3100} delay={1400} />
          <span>{t("sub_suffix")}</span>
          <RotatingSlot items={slot2} interval={2200} delay={500} />
        </div>

        {/* CTA row */}
        <div className="relative flex flex-wrap items-center gap-4">
          <Button variant="primary" href={CALENDLY_URL}>
            {t("btn_primary")}
          </Button>
          <Button variant="secondary" href="#offerings">
            {t("btn_secondary")}
          </Button>
        </div>
      </div>
    </section>
  )
}
