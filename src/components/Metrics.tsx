"use client"

import { m, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import type { Variants } from "framer-motion"
import { FADE_UP } from "@/lib/motion"

type Metric = {
  value: string
  label: string
}

const METRICS_STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const METRIC_CARD: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function Metrics() {
  const t = useTranslations("metrics")
  const items = t.raw("items") as Metric[]
  const reduced = useReducedMotion()

  return (
    <section
      id="proof"
      aria-labelledby="metrics-heading"
      className="scroll-mt-20"
      style={{ backgroundColor: "#F4F3FA" }}
    >
      <div className="section-inner section-py">
        <m.p
          id="metrics-heading"
          className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-14 text-center md:text-left"
          style={{ color: "#3B1F8C" }}
          variants={FADE_UP}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {t("label")}
        </m.p>

        <m.div
          className="grid gap-8 md:grid-cols-3 md:gap-6"
          variants={METRICS_STAGGER}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {items.map((metric) => (
            <m.div
              key={metric.label}
              variants={METRIC_CARD}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="metric-num text-[52px] sm:text-[64px] md:text-[80px] font-extrabold tracking-[-0.03em] leading-none">
                {metric.value}
              </div>
              <p
                className="mt-5 text-[15px] leading-[1.6] max-w-[16rem]"
                style={{ color: "#6B7280" }}
              >
                {metric.label}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
