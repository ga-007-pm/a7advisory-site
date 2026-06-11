"use client"

import { useTranslations } from "next-intl"

type AboutPoint = {
  num: string
  title: string
  body: string
}

const GRADIENT: React.CSSProperties = {
  background: "var(--gradient)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

export function About() {
  const t = useTranslations("about")
  const points = t.raw("points") as AboutPoint[]

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="section-inner section-py">

        {/* Header — full width */}
        <div className="mb-10">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
            style={{ color: "#9CA3AF" }}
          >
            {t("label")}
          </p>
          <h2
            id="about-heading"
            className="text-[40px] md:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.1] mb-3"
            style={{ color: "#0F0F14" }}
          >
            {t("heading")}
          </h2>
          <p className="text-[18px] font-medium" style={{ color: "#6B7280" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* Quote — full width */}
        <div className="mb-14">
          <span
            aria-hidden="true"
            className="block mb-1 leading-none select-none"
            style={{ ...GRADIENT, fontSize: "64px", fontWeight: 800 }}
          >
            "
          </span>
          <p
            className="text-[22px] md:text-[24px] font-medium leading-[1.55] max-w-3xl"
            style={{ color: "#0F0F14" }}
          >
            {t("quote")}
          </p>
        </div>

        {/* 2-col: points left, photo right */}
        <div className="grid md:grid-cols-[1fr_340px] gap-10 md:gap-16 items-start">

          {/* Left: numbered points + credentials */}
          <div className="flex flex-col gap-8">
            {points.map((point) => (
              <div key={point.num} className="flex gap-5">
                <span
                  className="text-[12px] font-bold tabular-nums shrink-0 mt-[3px]"
                  style={GRADIENT}
                >
                  {point.num}
                </span>
                <div>
                  <p
                    className="text-[15px] font-semibold mb-1.5"
                    style={{ color: "#0F0F14" }}
                  >
                    {point.title}
                  </p>
                  <p
                    className="text-[14px] leading-[1.75]"
                    style={{ color: "#6B7280" }}
                  >
                    {point.body}
                  </p>
                </div>
              </div>
            ))}

            <p
              className="text-[12px] pt-2"
              style={{ color: "#9CA3AF", letterSpacing: "0.02em" }}
            >
              {t("credentials")}
            </p>
          </div>

          {/* Right: sticky photo */}
          <div
            className="hidden md:block"
            style={{ position: "sticky", top: "88px", alignSelf: "start" }}
          >
            <div
              className="w-full rounded-[6px]"
              style={{
                aspectRatio: "3/4",
                background: "linear-gradient(160deg, #F4F3FA 0%, #EAE7F7 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px dashed rgba(140,82,255,0.2)",
              }}
            >
              <span className="text-[13px] font-medium" style={{ color: "#C4B8E8" }}>
                headshot
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
