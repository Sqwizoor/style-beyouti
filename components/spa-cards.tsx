"use client"

import { motion, Variants } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}

export function SpaCard({ 
  children, 
  className = '', 
  delay = 0, 
  hover = true,
  direction = 'up'
}: AnimatedCardProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: direction === 'scale' ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={hover ? { 
        y: -15,
        scale: 1.05,
        rotateY: 5,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      } : {}}
      whileTap={hover ? { scale: 0.95 } : {}}
      className={className}
    >
      <Card className="group relative overflow-hidden bg-gradient-to-br from-spa-white to-spa-beige-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:shadow-spa-pink-200/50">
        <div className="absolute inset-0 bg-gradient-to-br from-spa-pink-50/50 via-transparent to-spa-gold-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-spa-pink-200/20 to-spa-gold-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          {children}
        </div>
      </Card>
    </motion.div>
  )
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  image,
  delay = 0 
}: { 
  title: string
  description: string  
  icon: ReactNode
  image?: string
  delay?: number 
}) {
  return (
    <SpaCard delay={delay} className="h-full">
      <CardHeader className="text-center pb-4">
        <motion.div 
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 rounded-full shadow-lg mx-auto mb-4"
          whileHover={{ 
            rotate: 360,
            scale: 1.2,
            transition: { duration: 0.8 }
          }}
        >
          <span className="text-2xl">{icon}</span>
        </motion.div>
        <CardTitle className="font-playfair text-xl text-spa-black group-hover:text-spa-pink-600 transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-poppins text-spa-beige-600 text-center leading-relaxed">
          {description}
        </p>
        {image && (
          <motion.div 
            className="mt-4 relative h-32 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </motion.div>
        )}
      </CardContent>
    </SpaCard>
  )
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: any
  title: string
  description: string
  delay?: number 
}) {
  return (
    <SpaCard delay={delay}>
      <CardContent className="p-8 text-center">
        <motion.div 
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
          whileHover={{ 
            y: -5,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.6 }
          }}
        >
          <Icon className="w-8 h-8 text-spa-pink-600 group-hover:text-spa-gold-600 transition-colors duration-300" />
        </motion.div>
        <h3 className="font-playfair font-semibold text-xl text-spa-black mb-4 group-hover:text-spa-pink-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="font-poppins text-spa-beige-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </SpaCard>
  )
}