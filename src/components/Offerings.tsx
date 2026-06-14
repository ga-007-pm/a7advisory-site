"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./Button"
import { CALENDLY_URL } from "@/lib/constants"

type OfferingItem = {
  num: string
  tag: string
  title: string
  subtitle: string
  body: string
  triggers: string[]
}

const ACCENTS = ["#8c52ff", "#e08448", "#2FA38E", "#1B3F8C"] as const

export function Offerings() {
  const t = useTranslations("offerings")
  const items = t.raw("items") as OfferingItem[]
  const [active, setActive] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="offerings"
      aria-labelledby="offerings-heading"
      style={{ backgroundColor: "#1A1A22" }}
    >
      <div className="section-inner section-py">

        {/* Section header */}
        <div className="mb-10 md:mb-14 text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "#6E7294" }}
          >
            {t("label")}
          </p>
          <h2
            id="offerings-heading"
            className="mt-4 mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: "#F0EDFF" }}
          >
            {t("heading")}
          </h2>
        </div>

        {/* ── MOBILE: stacked cards ── */}
        <div className="flex flex-col gap-4 md:hidden">
          {items.map((item, i) => {
            const accent = ACCENTS[i]
            return (
              <div
                key={item.num}
                className="rounded-[6px] overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `3px solid ${accent}`,
                }}
              >
                <div className="p-6">
                  {/* Tag pill */}
                  <span
                    className="text-[10px] font-bold tracking-[0.14em] uppercase inline-block mb-4"
                    style={{
                      color: accent,
                      border: `1px solid ${accent}4D`,
                      borderRadius: "3px",
                      padding: "3px 10px",
                    }}
                  >
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-[22px] font-extrabold tracking-[-0.03em] leading-[1.15] mb-2"
                    style={{ color: "#F0EDFF" }}
                  >
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p
                    className="text-[15px] font-medium leading-[1.5] mb-4 pb-4"
                    style={{
                      color: "#F0EDFF",
                      opacity: 0.7,
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {item.subtitle}
                  </p>

                  {/* Body */}
                  <p
                    className="text-[14px] leading-[1.75] mb-5"
                    style={{ color: "#6E7294" }}
                  >
                    {item.body}
                  </p>

                  {/* Triggers */}
                  <p
                    className="text-[10px] font-semibold tracking-[0.10em] uppercase mb-3"
                    style={{ color: "#6E7294" }}
                  >
                    {t("trigger_label")}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item.triggers.map((trigger, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-[13px] leading-[1.5]"
                        style={{ color: "#F0EDFF", opacity: 0.75 }}
                      >
                        <span
                          className="rounded-full shrink-0 mt-[6px]"
                          style={{
                            width: "5px",
                            height: "5px",
                            backgroundColor: accent,
                            display: "inline-block",
                          }}
                        />
                        {trigger}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}

          {/* Single CTA below all cards */}
          <div className="pt-4">
            <Button variant="primary" href={CALENDLY_URL} innerBg="#1A1A22">
              {t("cta")}
            </Button>
          </div>
        </div>

        {/* ── DESKTOP: sticky split panel ── */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: "280px 1fr" }}
        >
          {/* LEFT NAV */}
          <nav
            style={{
              borderRight: "1px solid rgba(255,255,255,0.08)",
              paddingRight: "40px",
            }}
            className="flex flex-col gap-1"
          >
            {items.map((item, i) => {
              const isActive = active === i
              const isHovered = hoveredIndex === i
              const accent = ACCENTS[i]

              return (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex items-start gap-[14px] px-3 py-4 rounded-[6px] w-full text-left cursor-pointer transition-colors duration-200"
                  style={{
                    border: "none",
                    borderLeft: `3px solid ${isActive ? accent : "transparent"}`,
                    background:
                      isActive
                        ? "rgba(255,255,255,0.05)"
                        : isHovered
                        ? "rgba(255,255,255,0.04)"
                        : "transparent",
                    color:
                      isActive || isHovered
                        ? "#F0EDFF"
                        : "rgba(240,237,255,0.45)",
                  }}
                >
                  <span
                    className="text-[14px] font-semibold tabular-nums mt-0.5 shrink-0"
                    style={{ color: "#6E7294" }}
                  >
                    {item.num}
                  </span>
                  <span className="flex flex-col gap-[3px]">
                    <span
                      className="text-[10px] font-bold tracking-[0.12em] uppercase transition-opacity duration-200"
                      style={{
                        color: accent,
                        opacity: isActive ? 1 : 0.45,
                      }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-[15px] font-semibold tracking-[-0.01em] leading-[1.2]">
                      {item.title}
                    </span>
                  </span>
                </button>
              )
            })}
          </nav>

          {/* RIGHT CONTENT */}
          <div style={{ paddingLeft: "56px", minHeight: "500px" }} className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
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
                      <span
                        className="text-[10px] font-bold tracking-[0.14em] uppercase inline-block mb-4"
                        style={{
                          color: accent,
                          border: `1px solid ${accent}4D`,
                          borderRadius: "3px",
                          padding: "3px 10px",
                        }}
                      >
                        {item.tag}
                      </span>

                      <h3
                        className="text-[28px] font-extrabold tracking-[-0.03em] leading-[1.15] mb-2.5"
                        style={{ color: "#F0EDFF" }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="text-[16px] font-medium leading-[1.5] mb-5 pb-5"
                        style={{
                          color: "#F0EDFF",
                          opacity: 0.7,
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {item.subtitle}
                      </p>

                      <p
                        className="text-[15px] leading-[1.75] mb-7"
                        style={{ color: "#6E7294" }}
                      >
                        {item.body}
                      </p>

                      <p
                        className="text-[11px] font-semibold tracking-[0.10em] uppercase mb-3"
                        style={{ color: "#6E7294" }}
                      >
                        {t("trigger_label")}
                      </p>
                      <ul className="flex flex-col gap-2.5">
                        {item.triggers.map((trigger, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-[14px] leading-[1.5]"
                            style={{ color: "#F0EDFF", opacity: 0.75 }}
                          >
                            <span
                              className="rounded-full shrink-0 mt-[7px]"
                              style={{
                                width: "5px",
                                height: "5px",
                                backgroundColor: accent,
                                display: "inline-block",
                              }}
                            />
                            {trigger}
                          </li>
                        ))}
                      </ul>
                    </>
                  )
                })()}
              </motion.div>
            </AnimatePresence>

            <div className="mt-auto pt-8">
              <Button variant="primary" href={CALENDLY_URL} innerBg="#1A1A22">
                {t("cta")}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
