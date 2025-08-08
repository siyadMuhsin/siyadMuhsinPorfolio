import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPreview() {
  const projects = [
    {
      title: "ServiceHub",
      description: "Online service booking platform with dashboards for providers and customers.",
      liveLink: "https://servicehub-demo.com",
      githubLink: "https://github.com/siyad/servicehub",
    },
    {
      title: "Fruitables",
      description: "Fresh fruits & vegetables e-commerce with modern shopping experience.",
      liveLink: "https://fruitables-demo.com",
      githubLink: "https://github.com/siyad/fruitables",
    },
    {
      title: "User Management System",
      description: "User authentication, authorization, and profile management platform.",
      liveLink: "https://usermanagement-demo.com",
      githubLink: "https://github.com/siyad/user-management",
    },
  ]

  return (
    <section id="projects" className=" bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
          Featured <span className="text-green-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500 transition-all duration-300 group"
            >
              {/* Project Content */}
              <div className="p-6 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600/10 text-green-400 rounded-lg border border-green-500/30 hover:bg-green-600/20 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}