"use client"
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import projects from '@/data/projects'
import { motion } from 'framer-motion'

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-green-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Selected works demonstrating my technical expertise and problem-solving approach
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Project Card */}
              <div className="h-full bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 group-hover:border-green-500/50 transition-all duration-300 flex flex-col">
                {/* Thumbnail with Hover Effect */}
                <div className="relative h-60 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Preview */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs font-medium px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full"
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs font-medium px-2 py-1 bg-gray-800/50 text-gray-400 rounded-full">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center gap-2 px-4 py-2.5 bg-green-600/90 hover:bg-green-500 text-white rounded-lg font-medium transition-all group/button"
                    >
                      <span>View Details</span>
                      <ArrowRight 
                        size={16} 
                        className="transition-transform group-hover/button:translate-x-1" 
                      />
                    </Link>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-transparent hover:bg-gray-800 text-gray-300 rounded-lg font-medium border border-gray-700 transition-all"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}

                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-transparent hover:bg-gray-800 text-gray-300 rounded-lg font-medium border border-gray-700 transition-all"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium transition-all group/button"
          >
            <span>Explore All Projects</span>
            <ArrowRight 
              size={18} 
              className="transition-transform group-hover/button:translate-x-1" 
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}