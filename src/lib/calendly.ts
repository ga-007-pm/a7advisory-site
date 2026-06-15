import { CALENDLY_URL } from "./constants"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: {
        url: string
        pageSettings?: {
          backgroundColor?: string
          textColor?: string
          primaryColor?: string
        }
      }) => void
    }
  }
}

let _loadPromise: Promise<void> | null = null

function ensureCalendlyLoaded(): Promise<void> {
  if (_loadPromise) return _loadPromise
  _loadPromise = new Promise((resolve) => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => resolve()
    document.head.appendChild(script)
  })
  return _loadPromise
}

export async function openCalendly() {
  if (typeof window === "undefined") return
  await ensureCalendlyLoaded()
  window.Calendly?.initPopupWidget({
    url: CALENDLY_URL,
    pageSettings: {
      backgroundColor: "1A1A22",
      textColor: "F0EDFF",
      primaryColor: "8c52ff",
    },
  })
}
