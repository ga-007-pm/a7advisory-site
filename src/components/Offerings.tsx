"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { m, AnimatePresence, useReducedMotion } from "framer-motion"
import { Button } from "./Button"
import { openCalendly } from "@/lib/calendly"
import { STAGGER, FADE_UP, FADE_UP_SM, SLIDE_LEFT_SM } from "@/lib/motion"

type OfferingItem = {
  num: string
  tag: string
  title: string
  subtitle: string
  body: string
  triggers: string[]
}

const ACCENTS = ["#8c52ff", "#e08448", "#2FA38E", "#5B8BF5"] as const

const TRIGGER_STAGGER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.18 } },
}

export function Offerings() {
  const t = useTranslations("offerings")
  const items = t.raw("items") as OfferingItem[]
  const [active, setActive] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <section
      id="offerings"
      aria-labelledby="offerings-heading"
      style={{ backgroundColor: "#1A1A22" }}
    >
      <div className="section-inner section-py">

        {/* Section header */}
        <m.div
          className="mb-10 md:mb-14 text-center"
          variants={FADE_UP}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#6E7294" }}>
            {t("label")}
          </p>
          <h2
            id="offerings-heading"
            className="mt-4 mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: "#F0EDFF" }}
          >
            {t("heading")}
          </h2>
        </m.div>

        {/* ── MOBILE: stacked cards ── */}
        <m.div
          className="flex flex-col gap-4 md:hidden"
          variants={STAGGER}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {items.map((item, i) => {
            const accent = ACCENTS[i]
            return (
              <m.div
                key={item.num}
                variants={FADE_UP}
                className="rounded-[6px] overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `3px solid ${accent}`,
                }}
              >
                <div className="p-6">
                  <span
                    className="text-[10px] font-bold tracking-[0.14em] uppercase inline-block mb-4"
                    style={{ color: accent, border: `1px solid ${accent}4D`, borderRadius: "3px", padding: "3px 10px" }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-[22px] font-extrabold tracking-[-0.03em] leading-[1.15] mb-2" style={{ color: "#F0EDFF" }}>
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-medium leading-[1.5] mb-4 pb-4" style={{ color: "#F0EDFF", opacity: 0.7, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    {item.subtitle}
                  </p>
                  <p className="text-[14px] leading-[1.75] mb-5" style={{ color: "#6E7294" }}>
                    {item.body}
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.10em] uppercase mb-3" style={{ color: "#6E7294" }}>
                    {t("trigger_label")}
                  </p>
                  <m.ul
                    className="flex flex-col gap-2"
                    variants={TRIGGER_STAGGER}
                    initial={reduced ? false : "hidden"}
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {item.triggers.map((trigger, j) => (
                      <m.li key={j} variants={FADE_UP_SM} className="flex items-start gap-2.5 text-[13px] leading-[1.5]" style={{ color: "#F0EDFF", opacity: 0.75 }}>
                        <span className="rounded-full shrink-0 mt-[6px]" style={{ width: "5px", height: "5px", backgroundColor: accent, display: "inline-block" }} />
                        {trigger}
                      </m.li>
                    ))}
                  </m.ul>
                </div>
              </m.div>
            )
          })}

          <div className="pt-4">
            <Button variant="primary" onClick={openCalendly} innerBg="#1A1A22">
              {t("cta")}
            </Button>
          </div>
        </m.div>

        {/* ── DESKTOP: sticky split panel ── */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: "280px 1fr" }}>

          {/* LEFT NAV */}
          <m.nav
            style={{ borderRight: "1px solid rgba(255,255,255,0.08)", paddingRight: "40px" }}
            className="flex flex-col gap-1"
            variants={STAGGER}
            initial={reduced ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {items.map((item, i) => {
              const isActive = active === i
              const isHovered = hoveredIndex === i
              const accent = ACCENTS[i]

              return (
                <m.button
                  key={item.num}
                  variants={SLIDE_LEFT_SM}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex items-start gap-[14px] px-3 py-4 rounded-[6px] w-full text-left cursor-pointer transition-colors duration-200"
                  style={{
                    border: "none",
                    borderLeft: `3px solid ${isActive ? accent : "transparent"}`,
                    background: isActive ? "rgba(255,255,255,0.05)" : isHovered ? "rgba(255,255,255,0.04)" : "transparent",
                    color: isActive || isHovered ? "#F0EDFF" : "rgba(240,237,255,0.45)",
                  }}
                >
                  <span className="text-[14px] font-semibold tabular-nums mt-0.5 shrink-0" style={{ color: "#6E7294" }}>
                    {item.num}
                  </span>
                  <span className="flex flex-col gap-[3px]">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase transition-opacity duration-200" style={{ color: accent, opacity: isActive ? 1 : 0.45 }}>
                      {item.tag}
                    </span>
                    <span className="text-[15px] font-semibold tracking-[-0.01em] leading-[1.2]">
                      {item.title}
                    </span>
                  </span>
                </m.button>
              )
            })}
          </m.nav>

          {/* RIGHT CONTENT */}
          <div style={{ paddingLeft: "56px", minHeight: "400px" }} className="flex flex-col">
            <AnimatePresence mode="wait">
              <m.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                style={{ flex: 1 }}
              >
                {(() => {
                  const item = items[active]
                  const accent = ACCENTS[active]
                  return (
                    <>
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase inline-block mb-4" style={{ color: accent, border: `1px solid ${accent}4D`, borderRadius: "3px", padding: "3px 10px" }}>
                        {item.tag}
                      </span>
                      <h3 className="text-[28px] font-extrabold tracking-[-0.03em] leading-[1.15] mb-2.5" style={{ color: "#F0EDFF" }}>
                        {item.title}
                      </h3>
                      <p className="text-[16px] font-medium leading-[1.5] mb-5 pb-5" style={{ color: "#F0EDFF", opacity: 0.7, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                        {item.subtitle}
                      </p>
                      <p className="text-[15px] leading-[1.75] mb-7" style={{ color: "#6E7294" }}>
                        {item.body}
                      </p>
                      <p className="text-[11px] font-semibold tracking-[0.10em] uppercase mb-3" style={{ color: "#6E7294" }}>
                        {t("trigger_label")}
                      </p>
                      <m.ul
                        className="flex flex-col gap-2.5"
                        variants={reduced ? undefined : TRIGGER_STAGGER}
                        initial={reduced ? false : "hidden"}
                        whileInView={reduced ? undefined : "show"}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        {item.triggers.map((trigger, j) => (
                          <m.li
                            key={j}
                            variants={reduced ? undefined : FADE_UP_SM}
                            className="flex items-start gap-2.5 text-[14px] leading-[1.5]"
                            style={{ color: "#F0EDFF", opacity: 0.75 }}
                          >
                            <span className="rounded-full shrink-0 mt-[7px]" style={{ width: "5px", height: "5px", backgroundColor: accent, display: "inline-block" }} />
                            {trigger}
                          </m.li>
                        ))}
                      </m.ul>
                    </>
                  )
                })()}
              </m.div>
            </AnimatePresence>

            <div className="mt-8">
              <Button variant="primary" onClick={openCalendly} innerBg="#1A1A22">
                {t("cta")}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
