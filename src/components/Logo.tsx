import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  isDark?: boolean
}

export function Logo({ className, isDark = true }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1 font-bold leading-none select-none",
        className
      )}
    >
      {/* "A" — gradient, works on any background */}
      <span
        style={{
          background: "var(--gradient)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontSize: "1.375rem",
          letterSpacing: "-0.02em",
        }}
      >
        A
      </span>
      {/* "7" — adapts to nav theme */}
      <span
        style={{
          color: isDark ? "#F0EDFF" : "#0F0F14",
          fontSize: "1.375rem",
          letterSpacing: "-0.02em",
          marginLeft: "-0.15em",
          transition: "color 0.3s",
        }}
      >
        7
      </span>
      {/* wordmark */}
      <span
        className="font-medium"
        style={{
          color: isDark ? "#6E7294" : "#6B7280",
          fontSize: "0.8rem",
          letterSpacing: "0.01em",
          transition: "color 0.3s",
        }}
      >
        Advisory
      </span>
    </span>
  )
}
