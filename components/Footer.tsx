'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-navy py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Diego Villanueva Fernandez — Built with{' '}
            <Heart className="inline w-4 h-4 fill-pink-500 text-pink-500" /> using Next.js & TailwindCSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

