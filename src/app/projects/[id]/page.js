"use client"
import { useParams } from "next/navigation"
import React from "react"
import projects from "@/data/projects"
import { motion, AnimatePresence } from "framer-motion"
import { FiGithub, FiExternalLink, FiCheck, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useState } from "react"
import { SiGithub } from "react-icons/si"
import Image from "next/image"

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))
  const [currentImage, setCurrentImage] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-8"
        >
          <h1 className="text-4xl font-bold text-green-500 mb-4">404</h1>
          <p className="text-xl text-gray-300">Project not found</p>
        </motion.div>
      </div>
    )
  }

  const images = project.images && project.images.length > 0 ? project.images : [project.image]

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Radial gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/10 to-black/90 -z-10" />
      
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.a
          href="/projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-green-500 mb-8 transition-colors"
        >
          <FiChevronLeft /> Back to Projects
        </motion.a>

        {/* Project Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-2 font-sans">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400">{project.tagline}</p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="relative w-full h-[500px] mb-16 rounded-2xl overflow-hidden border border-gray-800"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt={`${project.title} screenshot`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 p-3 rounded-full backdrop-blur-sm transition-all"
                aria-label="Previous image"
              >
                <FiChevronLeft className="text-2xl text-white" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 p-3 rounded-full backdrop-blur-sm transition-all"
                aria-label="Next image"
              >
                <FiChevronRight className="text-2xl text-white" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/80 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentImage + 1} / {images.length}
            </div>
          )}
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideIn}
            >
              <h2 className="text-2xl font-bold text-green-400 mb-6 border-b border-gray-800 pb-2">
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Modules Section */}
            {project.modules && project.modules.length > 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideIn}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-green-400 mb-6 border-b border-gray-800 pb-2">
                  Key Modules
                </h2>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {project.modules.map((module, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeIn}
                      className="bg-gray-900/50 rounded-xl p-5 border border-gray-800 hover:border-green-500/30 transition-all"
                    >
                      <h3 className="text-xl font-semibold text-green-400 mb-3">
                        {module.name}
                      </h3>
                      <p className="text-gray-300 mb-3">{module.description}</p>
                      {module.features && (
                        <ul className="space-y-2">
                          {module.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-gray-400">
                              <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Features */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-green-400 mb-6 border-b border-gray-800 pb-2">
                Key Features
              </h2>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {project.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeIn}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <FiCheck className="text-green-400" />
                      </div>
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-green-400 mb-6 border-b border-gray-800 pb-2">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gray-800/70 hover:bg-gray-700/70 px-3 py-2 rounded-lg border border-gray-700 transition-all"
                  >
                    {typeof tech.icon === "string" ? (
                      <Image src={tech.icon} alt={tech.name} className="w-5 h-5" />
                    ) : (
                      React.cloneElement(tech.icon, {
                        className: `${tech.icon.props.className || ""} text-xl`,
                        style: { ...tech.icon.props.style }
                      })
                    )}
                    <span className="text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-green-400 mb-6 border-b border-gray-800 pb-2">
                Project Links
              </h2>
              <div className="space-y-4">
                {project.liveLink && (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    <FiExternalLink className="text-lg" />
                    View Live Demo
                  </motion.a>
                )}
                {project.codeLink && (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium border border-green-600 transition-all"
                  >
                    <SiGithub className="text-lg" />
                    View Source Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}