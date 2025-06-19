"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Projects() {
  const mainProjects = [
    {
      title: "Ride Sharing Platform",
      description:
        "Community-driven ride-sharing platform with live tracking, subscription system, coupons, SOS button, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
      status: "Work in Progress",
      github: "#",
      live: null,
    },
    {
      title: "Responsive E-commerce Website",
      description: "Full-featured e-commerce platform with secure authentication and payment gateway integration.",
      technologies: ["Next.js", "TypeScript", "SSR", "SSG"],
      status: "Completed",
      github: "#",
      live: "#",
    },
    {
      title: "Interactive Portfolio Website",
      description: "Modern portfolio website showcasing UI/UX design with best practices and dynamic routing.",
      technologies: ["Next.js", "Dynamic Routing", "Responsive Design"],
      status: "Completed",
      github: "#",
      live: "#",
    },
    {
      title: "CRUD Application",
      description: "Full-stack CRUD application with modern React patterns and state management.",
      technologies: ["React", "Tailwind CSS", "Redux"],
      status: "Completed",
      github: "#",
      live: "#",
    },
  ]

  const miniProjects = [
    {
      title: "Signup/Login System with Admin Control",
      technologies: ["Node.js", "MongoDB", "JavaScript"],
    },
    {
      title: "Todo App",
      technologies: ["React.js"],
    },
    {
      title: "OLX Clone (Frontend)",
      technologies: ["React.js", "React Router", "Tailwind CSS"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Main Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant={project.status === "Work in Progress" ? "destructive" : "default"}
                      className={project.status === "Work in Progress" ? "bg-orange-500" : "bg-green-500"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      >
                        {/* <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-1" />
                          Live Demo
                        </a> */}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mini Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Mini Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {miniProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-3">{project.title}</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-slate-600 text-gray-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
