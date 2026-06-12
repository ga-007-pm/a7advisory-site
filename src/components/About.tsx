"use client"

import { useTranslations } from "next-intl"

type AboutPoint = {
  num: string
  title: string
  body: string
}

const GRAD = "linear-gradient(90deg, #8c52ff 0%, #a86bff 48%, #e08448 100%)"
const ICON_COLOR = "#3D3D4E"

function TargetIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  )
}

const ICONS = [TargetIcon, LayersIcon, MapPinIcon, MicIcon]

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

        {/* Header */}
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

        {/* Quote */}
        <div className="mb-14 relative" style={{ paddingLeft: 24 }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 3,
              borderRadius: 2,
              background: GRAD,
            }}
          />
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-3"
            style={{ color: "#9CA3AF" }}
          >
            In my own words
          </p>
          <blockquote
            style={{
              fontSize: 20,
              fontStyle: "italic",
              fontWeight: 500,
              lineHeight: 1.65,
              color: "#1A1A2E",
              margin: 0,
            }}
          >
            &ldquo;{t("quote")}&rdquo;
          </blockquote>
        </div>

        {/* 2-col: timeline left, photo right */}
        <div className="grid md:grid-cols-[1fr_340px] gap-10 md:gap-16 items-start">

          {/* Left: timeline */}
          <div className="flex flex-col">
            {points.map((point, i) => {
              const isLast = i === points.length - 1
              const Icon = ICONS[i]
              return (
                <div key={point.num} className="flex gap-5">

                  {/* Timeline track: icon + connecting line */}
                  <div
                    className="flex flex-col items-center"
                    style={{ width: 56, flexShrink: 0 }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon />
                    </div>

                    {!isLast && (
                      <div
                        style={{
                          width: 1,
                          flexGrow: 1,
                          minHeight: 28,
                          margin: "4px 0",
                          borderRadius: 1,
                          background: "rgba(140,82,255,0.2)",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      paddingTop: 14,
                      paddingBottom: isLast ? 0 : 32,
                      flexGrow: 1,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#0F0F14",
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                    >
                      {point.title}
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.8,
                        color: "#374151",
                      }}
                    >
                      {point.body}
                    </p>
                  </div>
                </div>
              )
            })}

            <p
              className="text-[12px] mt-4"
              style={{ color: "#9CA3AF", letterSpacing: "0.02em", marginLeft: 76 }}
            >
              {t("credentials")}
            </p>
          </div>

          {/* Right: sticky photo placeholder */}
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
