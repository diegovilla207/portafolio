'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Linkedin, ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue via-purple-500 to-pink-500 animate-pulse-slow" />
      </div>

      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 400}
              cy={Math.random() * 400}
              r="2"
              fill="currentColor"
              className="text-electric-blue"
            />
          ))}
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-electric-blue via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Diego Villanueva Fernandez
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2"
        >
          Robotics & Digital Systems Engineering Student
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8"
        >
          Programming Mentor | Innovator
        </motion.p>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-sm md:text-base"
        >
          <a
            href="mailto:A01199495@tec.mx"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-electric-blue transition-colors"
          >
            <Mail className="w-5 h-5" />
            A01199495@tec.mx
          </a>

          <a
            href="tel:+528112108138"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-electric-blue transition-colors"
          >
            <Phone className="w-5 h-5" />
            +52 8112108138
          </a>

          <a
            href="https://linkedin.com/in/diego-villanueva-fernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-electric-blue transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <MapPin className="w-5 h-5" />
            Monterrey, Nuevo León, México
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-electric-blue text-white rounded-full font-medium hover:bg-electric-blue/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore My Work
          </motion.button>

          <motion.a
            href="/cv.pdf"
            download
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-electric-blue text-electric-blue dark:text-electric-blue rounded-full font-medium hover:bg-electric-blue/10 transition-colors flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

