"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in building scalable applications with modern technologies",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Converting Figma designs into pixel-perfect, responsive applications",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Implementing lazy loading, code-splitting, and caching strategies",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           I&apos;m a passionate developer who loves creating amazing digital experiences. With a strong foundation in
            modern web technologies, I bring ideas to life through clean, efficient code and thoughtful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                  <p className="text-gray-300">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
