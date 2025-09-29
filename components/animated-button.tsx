"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'
import Link from 'next/link'

interface AnimatedButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
  className?: string
  disabled?: boolean
  external?: boolean
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
  disabled = false,
  external = false
}: AnimatedButtonProps) {
  const baseClasses = "relative overflow-hidden font-poppins font-semibold transition-all duration-500"
  
  const variants = {
    primary: "bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white",
    secondary: "bg-gradient-to-r from-spa-beige-200 to-spa-pink-100 hover:from-spa-beige-300 hover:to-spa-pink-200 text-spa-black",
    outline: "border-2 border-spa-pink-400 text-spa-pink-600 hover:bg-spa-pink-50 hover:text-spa-pink-700",
    ghost: "text-spa-pink-600 hover:bg-spa-pink-50 hover:text-spa-pink-700"
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  }

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizeClasses[size]} ${className} rounded-full shadow-lg hover:shadow-2xl`

  const ButtonComponent = (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -3,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
    >
      <Button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {/* Pulse background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-spa-pink-400/20 to-spa-gold-400/20 rounded-full"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Button>
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} target={external ? '_blank' : undefined}>
        {ButtonComponent}
      </Link>
    )
  }

  return ButtonComponent
}

export function FloatingCallButton() {
  return (
    <motion.div
      className="fixed bottom-24 right-6 z-40"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: 1, 
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1
        }
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.6 }
      }}
    >
      <Button
        asChild
        className="h-16 w-16 rounded-full bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-white shadow-2xl hover:shadow-spa-pink-300 transition-all duration-500"
      >
        <Link href="tel:0617747378">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            📞
          </motion.div>
        </Link>
      </Button>
    </motion.div>
  )
}