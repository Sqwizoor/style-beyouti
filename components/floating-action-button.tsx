"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin,
  X,
  ChevronUp
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const contactOptions = [
    {
      icon: Phone,
      label: "Call Kumarie",
      action: "tel:0617747378",
      description: "061 774 7378",
      color: "bg-spa-pink-500 hover:bg-spa-pink-600 text-white"
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      action: "https://wa.me/0617747378?text=Hi%20Kumarie,%20I%20would%20like%20to%20book%20a%20spa%20appointment%20at%20Style%20%26%20Beyouti%20Zone%20Spa.%20Please%20let%20me%20know%20your%20availability.",
      description: "Message Now",
      color: "bg-green-500 hover:bg-green-600 text-white shadow-green-200"
    },
    {
      icon: Mail,
      label: "Email",
      action: "mailto:info@stylebeyoutizone.co.za",
      description: "Send Email",
      color: "bg-spa-gold-500 hover:bg-spa-gold-600 text-white"
    },
    {
      icon: MapPin,
      label: "Service Area",
      action: "/contact",
      description: "Coverage Area",
      color: "bg-spa-beige-500 hover:bg-spa-beige-600 text-white"
    }
  ]

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 space-y-3">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-slideInRight hover:animate-bounceIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="ml-auto shadow-2xl border-0 hover:shadow-spa-pink-200 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-morphing">
                  <CardContent className="p-3 bg-gradient-to-r from-spa-white to-spa-beige-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-medium text-sm animate-slideInLeft">{option.label}</div>
                        <div className="text-xs text-muted-foreground animate-fadeIn" style={{ animationDelay: '200ms' }}>{option.description}</div>
                      </div>
                      <Button
                        size="sm"
                        className={`h-12 w-12 rounded-full ${option.color} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-12 animate-heartbeat`}
                        asChild
                      >
                        <Link href={option.action} target={option.action.startsWith('http') ? '_blank' : undefined}>
                          <option.icon className="h-5 w-5 animate-pulse" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-14 w-14 rounded-full shadow-2xl transition-all duration-700 transform hover:scale-125 ${
            isOpen 
              ? 'bg-spa-pink-500 hover:bg-spa-pink-600 rotate-45 animate-rotateIn' 
              : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 animate-heartbeat hover:animate-bounceIn'
          } text-white relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
          {isOpen ? (
            <X className="h-6 w-6 animate-rotateIn" />
          ) : (
            <div className="relative">
              <FaWhatsapp className="h-7 w-7 animate-wiggle hover:animate-heartbeat" />
            </div>
          )}
        </Button>
      </div>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 h-12 w-12 rounded-full bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground shadow-lg backdrop-blur-sm z-40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 animate-bounceIn hover:animate-heartbeat"
          size="sm"
        >
          <ChevronUp className="h-5 w-5 animate-bounce" />
        </Button>
      )}
    </>
  )
}
