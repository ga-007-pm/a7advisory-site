"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import type { ReactNode } from "react"
import { STAGGER, FADE_UP, FADE_IN, SLIDE_LEFT } from "@/lib/motion"

type AboutPoint = {
  kicker: string
  title: string
  body: string
}

const GRAD = "linear-gradient(90deg, #8c52ff 0%, #a86bff 48%, #e08448 100%)"
const KICKER_COLORS = ["#8c52ff", "#e08448", "#2FA38E", "#5B8BF5"]

export function About() {
  const t = useTranslations("about")
  const points = t.raw("points") as AboutPoint[]
  const credentials = t("credentials").split(" · ")
  const reduced = useReducedMotion()

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20"
      style={{ backgroundColor: "#1A1A22" }}
    >
      <div className="section-inner section-py">

        {/* Header */}
        <motion.div
          className="max-w-3xl"
          variants={FADE_UP}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#6E7294" }}>
            {t("label")}
          </p>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "#F0EDFF" }}>
            {t("heading")}
          </h2>
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          className="flex items-center gap-4 mt-10 md:mt-16"
          variants={FADE_IN}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span aria-hidden="true" className="font-serif leading-none flex-shrink-0 select-none text-[4rem] md:text-[5rem]" style={{ color: "rgba(240,237,255,0.25)", lineHeight: 1 }}>
            &ldquo;
          </span>
          <p className="pull-quote md:text-2xl" style={{ color: "#F0EDFF" }}>
            {t.rich("quote", {
              grad: (chunks: ReactNode) => (
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {chunks}
                </span>
              ),
            })}
          </p>
        </motion.blockquote>

        {/* Two-column */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

          {/* Portrait */}
          <motion.div
            className="lg:col-span-5"
            variants={SLIDE_LEFT}
            initial={reduced ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.06)]">
              <img src="/headshot.jpg" alt={t("headshot_alt")} className="h-full w-full object-cover object-top" />
            </div>
          </motion.div>

          {/* Points */}
          <div className="lg:col-span-7 lg:pt-8">
            <motion.div
              className="space-y-10"
              variants={STAGGER}
              initial={reduced ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {points.map((p, i) => {
                const accent = KICKER_COLORS[i % KICKER_COLORS.length]
                return (
                  <motion.div
                    key={p.title}
                    variants={FADE_UP}
                    className="group relative pl-8"
                    style={{ borderLeft: "2px solid rgba(255,255,255,0.08)" }}
                  >
                    <div aria-hidden="true" className="absolute -left-[2px] top-0 h-8 w-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `linear-gradient(180deg, ${accent} 0%, transparent 100%)` }} />
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>
                      {p.kicker}
                    </span>
                    <h3 className="mb-3 text-xl font-bold" style={{ color: "#F0EDFF" }}>
                      {p.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: "#6E7294" }}>
                      {p.body}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Credentials */}
            <div className="mt-12 pt-8 flex flex-col gap-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {credentials.map((c) => {
                const match = c.match(/^(.+?)\s*\((.+?)\)$/)
                const label = match ? match[1] : c
                const desc = match ? match[2] : null
                return (
                  <div key={c} className="flex items-baseline gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(240,237,255,0.7)" }}>{label}</span>
                    {desc && <span className="text-[11px]" style={{ color: "rgba(240,237,255,0.35)" }}>{desc}</span>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
