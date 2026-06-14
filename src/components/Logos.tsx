"use client"

import { motion, useReducedMotion } from "framer-motion"

// Heights tuned individually — PNG files have different internal whitespace
const LOGOS = [
  { name: "Monday.com",          file: "monday.com.png",          h: 68 },
  { name: "Meta",                file: "Meta.png",                h: 64 },
  { name: "Cognota",             file: "cognota.png",             h: 62 },
  { name: "BQE Software",        file: "bqe.png",                 h: 68 },
  { name: "PlayStation Network", file: "PlayStation_Network.png", h: 56 },
  { name: "MobileCause",         file: "mobilecause.png",         h: 100 },
]

export function Logos() {
  const reduced = useReducedMotion()

  return (
    <section
      id="logos"
      data-nav-theme="light"
      className="border-b"
      style={{ backgroundColor: "#F4F3FA", borderColor: "#E2E0EF" }}
    >
      <div className="section-inner section-py-sm">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 place-items-center gap-y-8"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {LOGOS.map(({ name, file, h }) => (
            <img
              key={name}
              src={`/logos/${file}`}
              alt={name}
              className="grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 max-h-12 sm:max-h-none"
              style={{ height: `${h}px`, width: "auto", mixBlendMode: "multiply" }}
              onError={(e) => { e.currentTarget.style.display = "none" }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
