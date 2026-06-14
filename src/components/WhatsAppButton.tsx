import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

interface WhatsAppButtonProps {
  label: string
}

export function WhatsAppButton({ label }: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white/80 transition-all duration-200 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white"
    >
      <MessageCircle size={18} />
    </a>
  )
}
