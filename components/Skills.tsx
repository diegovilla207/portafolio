'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Languages, Heart } from 'lucide-react'

const skillCategories = [
  {
    title: 'Technical Skills',
    icon: Code,
    skills: ['C++', 'Java', 'Python', 'Robotics', 'Automation', 'Project Management'],
    color: 'electric-blue',
  },
  {
    title: 'Languages',
    icon: Languages,
    skills: ['Spanish (Native)', 'English (C1)', 'French (A2)', 'German (B1)'],
    color: 'purple',
  },
  {
    title: 'Interests',
    icon: Heart,
    skills: ['Piano', 'Rock Climbing', 'Hiking'],
    color: 'pink',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const colorClasses: Record<string, string> = {
    'electric-blue': 'bg-electric-blue text-white',
    'purple': 'bg-purple-500 text-white',
    'pink': 'bg-pink-500 text-white',
  }

  return (
    <section id="skills" ref={ref} className="section bg-gray-50 dark:bg-navy">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Interests
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Technical expertise and personal passions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${colorClasses[category.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <div className={`w-2 h-2 rounded-full ${colorClasses[category.color]}`} />
                        <span className="text-sm">{skill}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Robotics', 'Computer Vision', 'AI/ML', 'OpenCV', 'TensorFlow', 'ROS', 'Git', 'Scrum'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-electric-blue/10 dark:bg-electric-blue/20 text-electric-blue rounded-full font-medium text-sm hover:bg-electric-blue/20 dark:hover:bg-electric-blue/30 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

