"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { STAGGER, FADE_UP } from "@/lib/motion"

type Metric = {
  value: string
  label: string
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
        <motion.p
          id="metrics-heading"
          className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-14 text-center md:text-left"
          style={{ color: "#3B1F8C" }}
          variants={FADE_UP}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {t("label")}
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-3 md:gap-6"
          variants={STAGGER}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {items.map((m) => (
            <motion.div
              key={m.label}
              variants={FADE_UP}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="metric-num text-[52px] sm:text-[64px] md:text-[80px] font-extrabold tracking-[-0.03em] leading-none">
                {m.value}
              </div>
              <p
                className="mt-5 text-[15px] leading-[1.6] max-w-[16rem]"
                style={{ color: "#6B7280" }}
              >
                {m.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
