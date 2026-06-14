"use client"

import { useTranslations } from "next-intl"

type Metric = {
  value: string
  label: string
}

export function Metrics() {
  const t = useTranslations("metrics")
  const items = t.raw("items") as Metric[]

  return (
    <section
      id="proof"
      aria-labelledby="metrics-heading"
      className="scroll-mt-20"
      style={{ backgroundColor: "#F4F3FA" }}
    >
      <div className="section-inner section-py">
        <p
          id="metrics-heading"
          className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-14"
          style={{ color: "#4B5563" }}
        >
          {t("label")}
        </p>

        <div className="grid gap-12 md:grid-cols-3 md:gap-6">
          {items.map((m) => (
            <div key={m.label} className="flex flex-col items-start text-left">
              <div className="metric-num text-[64px] md:text-[80px] font-extrabold tracking-[-0.03em] leading-none">
                {m.value}
              </div>
              <p
                className="mt-5 text-[15px] leading-[1.6] max-w-[16rem]"
                style={{ color: "#374151" }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
