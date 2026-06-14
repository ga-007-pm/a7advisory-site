"use client"

import { useTranslations } from "next-intl"
import type { ReactNode } from "react"

type AboutPoint = {
  kicker: string
  title: string
  body: string
}

const GRAD = "linear-gradient(90deg, #8c52ff 0%, #a86bff 48%, #e08448 100%)"

// Offering accent colors — one per kicker, in order.
const KICKER_COLORS = ["#8c52ff", "#e08448", "#2FA38E", "#1B3F8C"]

export function About() {
  const t = useTranslations("about")
  const points = t.raw("points") as AboutPoint[]
  const credentials = t("credentials").split(" · ")

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="section-inner section-py">

        {/* Header */}
        <div className="max-w-3xl">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
            style={{ color: "#4B5563" }}
          >
            {t("label")}
          </p>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ color: "#1A1A22" }}
          >
            {t("heading")}
          </h2>
        </div>

        {/* Full-width pull quote */}
        <blockquote className="relative mt-16 pt-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-1 top-0 font-serif leading-none text-[6rem] sm:text-[8rem]"
            style={{ color: "rgba(59, 31, 140, 0.22)" }}
          >
            &ldquo;
          </span>
          <p
            className="relative max-w-4xl text-2xl md:text-[28px] font-bold italic leading-[1.35]"
            style={{ color: "#1A1A22" }}
          >
            {t.rich("quote", {
              grad: (chunks: ReactNode) => (
                <span
                  style={{
                    background: GRAD,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {chunks}
                </span>
              ),
            })}
          </p>
        </blockquote>

        {/* Two-column conversation */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">

          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F4F3FA]">
              <img
                src="/headshot.jpg"
                alt={t("headshot_alt")}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Conversational points */}
          <div className="lg:col-span-7 lg:pt-8">
            <div className="space-y-10">
              {points.map((p, i) => {
                const accent = KICKER_COLORS[i % KICKER_COLORS.length]
                return (
                  <div
                    key={p.title}
                    className="group relative pl-8"
                    style={{ borderLeft: "2px solid rgba(26,26,34,0.1)" }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -left-[2px] top-0 h-8 w-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(180deg, ${accent} 0%, transparent 100%)`,
                      }}
                    />
                    <span
                      className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: accent }}
                    >
                      {p.kicker}
                    </span>
                    <h3
                      className="mb-3 text-xl font-bold"
                      style={{ color: "#1A1A22" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-[15px] leading-relaxed"
                      style={{ color: "rgba(26,26,34,0.7)" }}
                    >
                      {p.body}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Credentials */}
            <div
              className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 pt-8 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ borderTop: "1px solid rgba(26,26,34,0.1)", color: "rgba(26,26,34,0.5)" }}
            >
              {credentials.map((c, i) => (
                <span key={c} className="flex items-center gap-x-4">
                  {i > 0 && <span style={{ color: "rgba(26,26,34,0.2)" }}>·</span>}
                  <span>{c}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
