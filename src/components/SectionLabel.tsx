import { cn } from "@/lib/utils"

interface SectionLabelProps {
  label: string
  heading: string
  align?: "left" | "center"
  className?: string
}

export function SectionLabel({
  label,
  heading,
  align = "left",
  className,
}: SectionLabelProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <p className="text-dim text-xs font-semibold uppercase tracking-widest mb-3">
        {label}
      </p>
      <h2 className="text-light text-3xl md:text-4xl font-bold tracking-tight">
        {heading}
      </h2>
    </div>
  )
}
