"use client"

import { useEffect, useRef } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "./Button"
import { RotatingSlot } from "./RotatingSlot"
import { CALENDLY_URL } from "@/lib/constants"

export function Hero() {
  const t = useTranslations("hero")
  const slot1 = t.raw("slot1") as string[]
  const slot2 = t.raw("slot2") as string[]

  // Cursor position normalized to [-0.5, 0.5] across the hero
  const sectionRef = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 50, damping: 18, mass: 0.6 })
  const springY = useSpring(my, { stiffness: 50, damping: 18, mass: 0.6 })

  // Purple glow leans toward the cursor; amber leans away — keeps them in counterpoint
  const purpleX = useTransform(springX, (v) => v * 160)
  const purpleY = useTransform(springY, (v) => v * 110)
  const amberX = useTransform(springX, (v) => v * -130)
  const amberY = useTransform(springY, (v) => v * -90)

  // Cursor trail — soft spring lag makes it follow rather than stick
  const tx = useMotionValue(0)
  const ty = useMotionValue(0)
  const trailX = useSpring(tx, { stiffness: 140, damping: 24, mass: 0.8 })
  const trailY = useSpring(ty, { stiffness: 140, damping: 24, mass: 0.8 })
  const trailOpacity = useMotionValue(0)
  const trailOpacitySpring = useSpring(trailOpacity, { stiffness: 120, damping: 30 })

  // Echo — a fainter halo on a much lazier spring, dragging behind the first
  const echoX = useSpring(tx, { stiffness: 55, damping: 18, mass: 1 })
  const echoY = useSpring(ty, { stiffness: 55, damping: 18, mass: 1 })
  const echoOpacity = useTransform(trailOpacitySpring, (v) => v * 0.37)

  // Trail tint follows the glow you're nearest: purple on the left, amber on the right
  const trailColor = useTransform(
    springX,
    [-0.5, 0.5],
    ["rgba(140,82,255,0.14)", "rgba(255,145,77,0.14)"]
  )
  const trailBackground = useMotionTemplate`radial-gradient(circle closest-side, ${trailColor} 0%, transparent 100%)`

  // Window-level tracking so the trail also follows over the fixed nav
  // (it shines through the frosted glass). Trail dims near the corner glows
  // where it would blend in anyway, and reads stronger over plain background.
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      const inHero =
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom
      if (!inHero) {
        mx.set(0)
        my.set(0)
        trailOpacity.set(0)
        return
      }
      const nx = (e.clientX - rect.left) / rect.width
      const ny = (e.clientY - rect.top) / rect.height
      mx.set(nx - 0.5)
      my.set(ny - 0.5)
      tx.set(e.clientX - rect.left)
      ty.set(e.clientY - rect.top)
      // Distance to nearest corner glow (purple top-left, amber bottom-right)
      const dPurple = Math.hypot(nx, ny)
      const dAmber = Math.hypot(1 - nx, 1 - ny)
      const away = Math.min(Math.min(dPurple, dAmber) / 0.5, 1)
      trailOpacity.set(0.55 + 0.45 * away)
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [mx, my, tx, ty, trailOpacity])

  const gradientText: React.CSSProperties = {
    background: "linear-gradient(90deg, #8c52ff 0%, #a86bff 48%, #e08448 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#08080E" }}
    >
      {/* 3px gradient topbar */}
      <div
        aria-hidden
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #8c52ff 0%, #a86bff 48%, #e08448 100%)",
        }}
      />

      {/* Purple glow — top-left. Dimensions match style-y.html exactly. DO NOT TOUCH.
          Outer: position anchor · Middle: mouse parallax spring · Inner: ambient drift */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-140px",
          left: "-100px",
          width: "640px",
          height: "540px",
          pointerEvents: "none",
        }}
      >
        <motion.div style={{ width: "100%", height: "100%", x: purpleX, y: purpleY }}>
          <div
            className="glow-drift-a"
            style={{
              width: "100%",
              height: "100%",
              background: "radial-gradient(ellipse at center, rgba(140,82,255,0.26) 0%, transparent 65%)",
            }}
          />
        </motion.div>
      </div>

      {/* Amber glow — bottom-right. Dimensions match style-y.html exactly. DO NOT TOUCH. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-80px",
          width: "520px",
          height: "420px",
          pointerEvents: "none",
        }}
      >
        <motion.div style={{ width: "100%", height: "100%", x: amberX, y: amberY }}>
          <div
            className="glow-drift-b"
            style={{
              width: "100%",
              height: "100%",
              background: "radial-gradient(ellipse at center, rgba(255,145,77,0.15) 0%, transparent 65%)",
            }}
          />
        </motion.div>
      </div>

      {/* Cursor trail echo — lazier spring, drags behind the main halo */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "280px",
          height: "280px",
          marginTop: "-140px",
          marginLeft: "-140px",
          x: echoX,
          y: echoY,
          opacity: echoOpacity,
          background: trailBackground,
          pointerEvents: "none",
        }}
      />

      {/* Cursor trail — lagging tinted halo, purple↔amber by horizontal position */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "140px",
          height: "140px",
          marginTop: "-70px",
          marginLeft: "-70px",
          x: trailX,
          y: trailY,
          opacity: trailOpacitySpring,
          background: trailBackground,
          pointerEvents: "none",
        }}
      />

      {/* Content — pt clears fixed nav (56px mobile / 64px desktop) + 88px reference spacing */}
      <div
        className="section-inner relative z-10 pt-36 md:pt-[152px] pb-24"
      >
        {/* Eyebrow */}
        <p
          className="relative mb-6 text-[12px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#6E7294" }}
        >
          {t("eyebrow")}
        </p>

        {/* H1 — only "leverage" gets gradient text */}
        <h1
          className="relative mb-7 max-w-[720px] text-[40px] font-extrabold leading-none tracking-[-0.035em] md:text-[52px] lg:text-[62px]"
          style={{ color: "#F0EDFF" }}
        >
          Turn product into{" "}
          <span style={gradientText}>leverage.</span>
        </h1>

        {/* Animated subtitle — muted surrounding text, white rotating words */}
        <div
          className="relative mb-10 flex flex-wrap items-start"
          style={{
            color: "#6E7294",
            fontSize: "17px",
            lineHeight: "1.65",
            gap: "0 0.3em",
            maxWidth: "580px",
          }}
        >
          <span>{t("sub_prefix")}</span>
          <RotatingSlot items={slot1} interval={3100} delay={1400} />
          <span>{t("sub_suffix")}</span>
          <RotatingSlot items={slot2} interval={2200} delay={500} />
        </div>

        {/* CTA row */}
        <div className="relative flex flex-wrap items-center gap-4">
          <Button variant="primary" href={CALENDLY_URL}>
            {t("btn_primary")}
          </Button>
          <Button variant="secondary" href="#offerings">
            {t("btn_secondary")}
          </Button>
        </div>
      </div>
    </section>
  )
}
