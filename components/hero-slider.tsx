"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSlide {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/dayspa3.jpeg",
    title: "Style & Beyouti Zone Spa",
    subtitle: "Personal • Private • Affordable • Relaxing",
    description: "Experience luxury spa treatments in the comfort of your own space"
  },
  {
    id: 2,
    image: "/spa1.jpeg",
    title: "Professional Massage Therapy",
    subtitle: "Therapeutic • Relaxing • Rejuvenating",
    description: "Expert massage techniques to relieve tension and restore balance"
  },
  {
    id: 3,
    image: "/dayspa5.jpeg",
    title: "Luxury Facial Treatments",
    subtitle: "Glowing • Refreshed • Beautiful",
    description: "Customized skincare treatments for radiant, healthy skin"
  },
  {
    id: 4,
    image: "/dayspa6.jpeg",
    title: "At-Home Wellness",
    subtitle: "Convenient • Safe • Comfortable",
    description: "Professional spa services delivered to your doorstep"
  }
]

interface HeroSliderProps {
  children: React.ReactNode
}

export default function HeroSlider({ children }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Auto-slide functionality with progress
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % heroSlides.length)
          return 0
        }
        return prev + 2 // Increase by 2% every 100ms (5 seconds total)
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [isAutoPlaying])

  // Reset progress when slide changes manually
  useEffect(() => {
    setProgress(0)
  }, [currentSlide])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
    setProgress(0)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
    setProgress(0)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setProgress(0)
  }, [])

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev)
    if (!isAutoPlaying) {
      setProgress(0)
    }
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images Slider */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-spa-black/85 via-spa-black/70 to-spa-black/50 dark:from-spa-black/90 dark:via-spa-black/80 dark:to-spa-black/60"></div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-0 right-0 z-20 flex justify-between px-6 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 bg-spa-white/10 hover:bg-spa-white/20 backdrop-blur-sm border border-spa-white/20 text-spa-white hover:text-spa-white rounded-full transition-all duration-300 hover:scale-110"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 bg-spa-white/10 hover:bg-spa-white/20 backdrop-blur-sm border border-spa-white/20 text-spa-white hover:text-spa-white rounded-full transition-all duration-300 hover:scale-110"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Auto-play Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-6 right-6 z-20 w-10 h-10 bg-spa-white/10 hover:bg-spa-white/20 backdrop-blur-sm border border-spa-white/20 text-spa-white hover:text-spa-white rounded-full transition-all duration-300"
        onClick={toggleAutoPlay}
      >
        {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>

      {/* Slide Indicators with Progress */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-12 h-3 rounded-full transition-all duration-300 overflow-hidden ${
              index === currentSlide
                ? 'bg-spa-white/30 scale-110'
                : 'bg-spa-white/20 hover:bg-spa-white/40'
            }`}
          >
            {index === currentSlide && isAutoPlaying && (
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            )}
            {index === currentSlide && !isAutoPlaying && (
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400" />
            )}
          </button>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          {children}
        </div>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 md:hidden">
        <div className="flex items-center space-x-2 bg-spa-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-spa-white/20">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-spa-white/60 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-spa-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-spa-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-spa-white/80 text-xs font-poppins">Swipe to explore</span>
        </div>
      </div>
    </section>
  )
}