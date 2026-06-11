"use client"

import { useRef, useEffect } from "react"

// Must match .hero-sub line-height
const LINE_H = 1.65

interface RotatingSlotProps {
  items: string[]
  interval: number
  delay: number
}

export function RotatingSlot({ items, interval, delay }: RotatingSlotProps) {
  const listRef = useRef<HTMLSpanElement>(null)
  const indexRef = useRef(items.length)

  // DOM order (top→bottom): [items[0]_clone, items[N-1], ..., items[1], items[0]]
  // Each advance: indexRef-- → translateY less negative → list moves DOWN → item enters from ABOVE
  const displayItems = [items[0], ...items.slice(1).reverse(), items[0]]

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    indexRef.current = items.length
    list.style.transition = "none"
    list.style.transform = `translateY(-${indexRef.current * LINE_H}em)`

    const onTransitionEnd = () => {
      if (indexRef.current === 0) {
        indexRef.current = items.length
        list.style.transition = "none"
        list.style.transform = `translateY(-${indexRef.current * LINE_H}em)`
      }
    }
    list.addEventListener("transitionend", onTransitionEnd)

    const advance = () => {
      indexRef.current -= 1
      list.style.transition = `transform 0.56s cubic-bezier(0.33, 1, 0.68, 1)`
      list.style.transform = `translateY(-${indexRef.current * LINE_H}em)`
    }

    let intervalId: ReturnType<typeof setInterval>
    const timer = setTimeout(() => {
      advance()
      intervalId = setInterval(advance, interval)
    }, delay)

    return () => {
      clearTimeout(timer)
      clearInterval(intervalId)
      list.removeEventListener("transitionend", onTransitionEnd)
    }
  }, [items, interval, delay]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        height: `${LINE_H}em`,
        verticalAlign: "top",
      }}
    >
      <span ref={listRef} style={{ display: "block", willChange: "transform" }}>
        {displayItems.map((item, i) => (
          <span
            key={i}
            style={{
              display: "block",
              height: `${LINE_H}em`,
              lineHeight: `${LINE_H}em`,
              color: "#F0EDFF",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </span>
    </span>
  )
}
