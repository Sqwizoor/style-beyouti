import type React from "react"
import "@/app/globals.css"
import { Poppins, Playfair_Display, Lora } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import FloatingActionButton from "@/components/floating-action-button"

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
})

const lora = Lora({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora"
})

export const metadata = {
  title: "Style & Beyouti Zone Spa | Personal • Private • Affordable • Relaxing",
  description:
    "Experience luxury spa treatments in the comfort of your own space. Style & Beyouti Zone Spa offers personal, private, and affordable relaxation services. Book your at-home spa session today!",
  keywords:
    "spa services, at-home spa, massage therapy, facials, relaxation treatments, affordable spa, private spa, mobile spa, aromatherapy, personal spa treatments, Kumarie",
  openGraph: {
    title: "Style & Beyouti Zone Spa | Personal • Private • Affordable • Relaxing",
    description:
      "Luxury spa treatments delivered to your doorstep. Experience personalized, private, and affordable relaxation services.",
    url: "https://stylebeyoutizone.com",
    siteName: "Style & Beyouti Zone Spa",
    images: [
      {
        url: "/day-spa.jpeg",
        width: 1200,
        height: 630,
        alt: "Style & Beyouti Zone Spa - Relaxation and Beauty Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${playfair.variable} ${lora.variable}`}>
      <body className={`${poppins.className} bg-spa-white text-spa-black`}>
        <ThemeProvider defaultTheme="light">
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <FloatingActionButton />
        </ThemeProvider>
      </body>
    </html>
  )
}