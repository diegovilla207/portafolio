'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Thank you for your message! I\'ll get back to you soon.')
    }, 1500)
  }

  return (
    <section id="contact" ref={ref} className="section bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Let&apos;s collaborate on something amazing
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-6">
              <motion.a
                href="mailto:A01199495@tec.mx"
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-electric-blue/10 transition-colors"
              >
                <Mail className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">A01199495@tec.mx</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+528112108138"
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-electric-blue/10 transition-colors"
              >
                <Phone className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">+52 8112108138</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/diego-villanueva-fernandez"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-electric-blue/10 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                  <p className="text-gray-600 dark:text-gray-400">dieg0-villanueva-fernandez</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <MapPin className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Monterrey, Nuevo León, México</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue text-gray-900 dark:text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-electric-blue text-white rounded-lg font-medium hover:bg-electric-blue/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

