import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Roberto Santos - Quick Massagem Corporativa | Massagens Roberto",
  description:
    "Quick Massagem Corporativa e Massagens Individuais a Domicílio. Sessões rápidas de 15 minutos para alívio do estresse, melhora da circulação e bem-estar. Atendimento no trabalho, casa ou onde preferir.",
  generator: "v0.app",
  openGraph: {
    title: "Roberto Santos - Quick Massagem Corporativa | Massagens Roberto",
    description:
      "Quick Massagem Corporativa e Massagens Individuais a Domicílio. Sessões rápidas de 15 minutos para alívio do estresse, melhora da circulação e bem-estar.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roberto Santos - Quick Massagem Corporativa | Massagens Roberto",
    description:
      "Quick Massagem Corporativa e Massagens Individuais a Domicílio. Sessões rápidas de 15 minutos para alívio do estresse, melhora da circulação e bem-estar.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
