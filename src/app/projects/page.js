"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import projects from "@/data/projects"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-green-500">
            Projects
          </h1>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-4 flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-bold text-green-500">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {project.tagline}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      <FiExternalLink /> Demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      <FiGithub /> Code
                    </a>
                  )}
                </div>

                {/* Details Button */}
                <Link href={`/projects/${project.id || index}`}>
                  <button className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-4 py-2 rounded-lg transition w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
