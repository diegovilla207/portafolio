'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const education = [
  {
    institution: 'Tec de Monterrey',
    location: 'Monterrey, Nuevo León',
    degree: 'B.S. in Robotics and Digital Systems Engineering',
    period: 'Aug 2025 – Present',
    gpa: 'GPA: 98/100',
    icon: GraduationCap,
  },
  {
    institution: 'Prepa Tec Garza Sada',
    location: 'Monterrey, Nuevo León',
    degree: 'Multicultural High School Diploma with Honors',
    period: 'Aug 2022 – May 2025',
    gpa: 'GPA: 94.7/100',
    icon: Award,
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" ref={ref} className="section bg-gray-50 dark:bg-navy">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Academic excellence and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue to-purple-500 dark:from-electric-blue dark:to-purple-500 transform md:-translate-x-1/2" />

            {/* Education Items */}
            {education.map((edu, index) => {
              const Icon = edu.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative mb-12 ${isLeft ? 'md:pr-1/2 md:pl-4' : 'md:pl-1/2 md:pr-4'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-electric-blue rounded-full transform -translate-x-2 md:-translate-x-1/2 z-10" />
                  <div className="absolute left-0 md:left-1/2 top-5 w-8 h-8 bg-electric-blue/20 rounded-full transform -translate-x-4 md:-translate-x-1/2 z-10" />

                  {/* Card */}
                  <div className="glass rounded-xl p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-electric-blue/10 rounded-full">
                        <Icon className="w-6 h-6 text-electric-blue" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {edu.location}
                        </p>
                        <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                          {edu.degree}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            {edu.gpa}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

