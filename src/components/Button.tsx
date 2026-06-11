import { cn } from "@/lib/utils"

interface ButtonProps {
  variant: "primary" | "secondary" | "cta"
  href?: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  innerBg?: string
}

export function Button({
  variant,
  href = "#",
  children,
  className,
  target,
  rel,
  innerBg,
}: ButtonProps) {

  if (variant === "primary") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        style={{ background: "var(--gradient)", padding: 1, borderRadius: 6, display: "inline-flex" }}
        className={cn(
          "group/cta transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(168,107,255,0.35),0_8px_24px_-6px_rgba(140,82,255,0.55),0_0_48px_-8px_rgba(224,132,72,0.35)]",
          className
        )}
      >
        <span
          className="transition-colors duration-200 group-hover/cta:text-white"
          style={{
            background: innerBg ?? "#08080E",
            borderRadius: 5,
            padding: "8px 16px",
            fontSize: 14,
            fontWeight: 500,
            color: "#F0EDFF",
            whiteSpace: "nowrap",
          }}
        >
          {children}
        </span>
      </a>
    )
  }

  if (variant === "secondary") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(
          "group inline-flex items-center gap-1.5 text-dim hover:text-light text-sm font-medium transition-colors duration-200",
          className
        )}
      >
        <span className="group-hover:-translate-y-px transition-transform duration-200 inline-block">
          {children}
        </span>
        <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
          →
        </span>
      </a>
    )
  }

  // cta — filled white, used on dark/purple backgrounds
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "#1E0535" }}
      className={cn(
        "inline-flex items-center rounded-[6px] px-6 py-3 text-sm font-semibold whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0",
        className
      )}
    >
      {children}
    </a>
  )
}
