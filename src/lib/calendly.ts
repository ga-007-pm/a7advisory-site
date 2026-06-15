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

export function openCalendly() {
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: CALENDLY_URL,
      pageSettings: {
        backgroundColor: "1A1A22",
        textColor: "F0EDFF",
        primaryColor: "8c52ff",
      },
    })
  }
}
