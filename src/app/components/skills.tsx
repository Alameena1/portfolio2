"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Next.js", "React.js", "Redux", "Node.js", "Express"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "UI & Design",
      skills: ["Figma", "Adobe Photoshop", "Tailwind CSS", "Bootstrap"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Build & Performance",
      skills: ["Webpack", "Babel", "ESLint", "Prettier"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Database & Backend",
      skills: ["MongoDB", "Sql", "postgreSql", "Firebase", "RESTful APIs"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Agile methodologies", "Problem-solving", "Team collaboration"],
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle
                    className={`text-xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-slate-700 text-gray-300 hover:bg-slate-600 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
