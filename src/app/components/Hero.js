import { Download, Mail} from 'lucide-react'
import { Code, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="pt-20  bg-gradient-to-br bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
         <div className="lg:w-1/2 mb-8 lg:mb-0">
  <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white font-sans">
    Hi, I'm{' '}
    <span className="text-green-500 font-semibold">
      Siyad Muhsin K
    </span>
  </h1>
  <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 font-medium">
    MERN Stack Developer
  </h2>
  <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
    Results-driven Full Stack Developer with expertise in the MERN stack, 
    passionate about designing robust, high-performing applications.
  </p>

  {/* Contact Info */}
  <div className="flex flex-wrap gap-4 mb-8">
    <a
      href="mailto:siyad@example.com"
      className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition-colors font-medium"
    >
      <Mail size={20} />
      <span className="hidden sm:inline">siyad@example.com</span>
    </a>
    <a
      href="https://github.com/siyad"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition-colors font-medium"
    >
      <Github size={20} />
      <span className="hidden sm:inline">GitHub</span>
    </a>
    <a
      href="https://linkedin.com/in/siyad"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition-colors font-medium"
    >
      <Linkedin size={20} />
      <span className="hidden sm:inline">LinkedIn</span>
    </a>
    <a
      href="https://leetcode.com/siyad"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition-colors font-medium"
    >
      <Code size={20} />
      <span className="hidden sm:inline">LeetCode</span>
    </a>
  </div>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href="/resume.pdf"
      download
      className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
    >
      <Download size={20} />
      Download Resume
    </a>
    <a
      href="#contact"
      className="inline-flex items-center justify-center gap-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
    >
      <Mail size={20} />
      Contact Me
    </a>
  </div>
</div>

          {/* Professional Photo Section */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
              
              {/* Main Photo Container */}
              <div className="relative w-50 h-50 lg:w-70 lg:h-70 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                <Image
                  src="/young-male-developer-headshot.png"
                  alt="Siyad Muhsin K - Professional Headshot"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative Floating Icons */}
<div className="absolute -top-6 -right-6 w-16 h-16  bg-yellow-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
  <Code size={28} className="text-white" /> {/* Green code icon */}
</div>

<div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black rounded-full bg-gray-600 flex items-center justify-center shadow-lg animate-bounce delay-150">
  <Github size={20} className="text-white" /> {/* GitHub official white on black */}
</div>

<div className="absolute  top-1/4 -left-8 w-14 h-14 bg-[#0A66C2] rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
  <Linkedin size={22} className="text-white" /> {/* LinkedIn official blue */}
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
