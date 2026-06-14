"use client"

import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 md:hidden"
      style={{ backgroundColor: "#25D366", color: "#ffffff" }}
    >
      <MessageCircle size={26} />
    </a>
  )
}
