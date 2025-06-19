"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "MERN Stack Developer",
      period: "2023 – Present",
      location: "Remote",
      achievements: [
        "Built scalable server-side applications with Next.js & Node.js",
        "Designed optimized schemas in MongoDB with advanced aggregation",
        "Converted Figma designs to responsive web apps",
        "Developed React components using TypeScript, React Hooks, Redux",
        "Optimized with lazy loading, code-splitting, caching",
        "Worked in Agile teams, maintaining modular, maintainable codebases",
      ],
    },
  ]

  const education = {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Bethany College of Arts and Commerce, Kerala",
    period: "2020 – 2023",
  }

  const achievements = ["Solved 100+ LeetCode problems focusing on algorithms and data structures"]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience & Education</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">My professional journey and academic background</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-purple-400 mt-1">•</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Education & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <Card className="bg-slate-800/50 border-slate-700 mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-white">{education.degree}</CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {education.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{education.institution}</p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-purple-400 mt-1">🏆</span>
                    {achievement}
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
