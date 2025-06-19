"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7994549934",
      href: "tel:+917994549934",
    },
    {
      icon: Mail,
      label: "Email",
      value: "alameena8841@gmail.com",
      href: "mailto:alameena8841@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "al-ameen-b5b30a295",
      href: "https://linkedin.com/in/al-ameen-b5b30a295",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Alameena1",
      href: "https://github.com/Alameena1",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can bring
            your ideas to life!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
                <CardContent className="p-6">
                  <motion.a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{contact.label}</p>
                      <p className="text-lg font-medium">{contact.value}</p>
                    </div>
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-3"
          >
            {/* <a href="mailto:alameena8841@gmail.com">
              <Mail className="mr-2" size={20} />
              Send Me an Email
            </a> */}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-slate-700"
        >
          <p className="text-gray-400">© 2024 Al-Ameen. Built with Next.js, Framer Motion, and Tailwind CSS.</p>
        </motion.div>
      </div>
    </section>
  )
}
