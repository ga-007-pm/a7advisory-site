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
        style={{ background: "var(--gradient)" }}
        className={cn("p-px rounded-[6px] inline-flex group", className)}
      >
        <span
          className="group-hover:bg-white/[0.07] rounded-[6px] px-4 py-2 text-sm font-medium text-light whitespace-nowrap transition-all duration-200 inline-flex items-center"
          style={{ backgroundColor: innerBg ?? "#08080E" }}
        >
          <span className="group-hover:-translate-y-px transition-transform duration-200 inline-block">
            {children}
          </span>
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
