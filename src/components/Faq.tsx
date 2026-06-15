"use client"

import { useState } from "react"
import { AnimatePresence, m, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { STAGGER, FADE_UP_SM } from "@/lib/motion"

type FaqItem = {
  q: string
  a: string
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <m.svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </m.svg>
  )
}

function FaqItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{ borderBottom: "1px solid rgba(15,15,20,0.1)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          className="text-base font-medium leading-snug transition-colors duration-200"
          style={{ color: hovered || open ? "#3B1F8C" : "#0F0F14" }}
        >
          {item.q}
        </span>
        <span
          className="transition-colors duration-200"
          style={{ color: open ? "#8c52ff" : hovered ? "#3B1F8C" : "rgba(15,15,20,0.3)" }}
        >
          <ChevronIcon open={open} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-6 text-[15px] leading-relaxed" style={{ color: "#4B5563" }}>
              {item.a}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  const t = useTranslations("faq")
  const items = t.raw("items") as FaqItem[]
  const reduced = useReducedMotion()

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-20"
      style={{ backgroundColor: "#F5F5F7" }}
    >
      <div className="section-inner section-py">

        <m.div
          className="max-w-3xl mx-auto mb-14 text-center"
          variants={FADE_UP_SM}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#3B1F8C" }}>
            {t("label")}
          </p>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "#0F0F14" }}>
            {t("heading")}
          </h2>
        </m.div>

        <m.div
          className="max-w-3xl mx-auto"
          style={{ borderTop: "1px solid rgba(15,15,20,0.1)" }}
          variants={STAGGER}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {items.map((item, i) => (
            <m.div key={i} variants={FADE_UP_SM}>
              <FaqItem item={item} />
            </m.div>
          ))}
        </m.div>

      </div>
    </section>
  )
}
