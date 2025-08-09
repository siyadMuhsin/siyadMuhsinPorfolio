import { Download, Mail, Code, Github, Linkedin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative bg-black mt-0">
      <div className="container mx-auto px-6 lg:px-9 py-20  flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="uppercase tracking-widest text-green-400 mb-3">Welcome to my world ✨</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-snug">
            Hi, I&apos;m <span className="text-green-500">Siyad Muhsin K</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-green-400 mb-6">
            MERN Stack Developer
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            Results-driven Full Stack Developer with expertise in the MERN stack, 
            passionate about designing robust, high-performing applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a
              href="/resume.pdf"
              download
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-medium transition-colors"
            >
              <Download size={20} /> Download Resume
            </a>
            <a
              href="#contact"
              className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-medium transition-colors"
            >
              <Mail size={20} /> Contact Me
            </a>
          </div>

          {/* Social Icons */}
                    <div className="flex justify-center lg:justify-start gap-5">
            <a
              href="mailto:siyadsm4065@gmail.com"
              className="bg-[#EA4335] hover:opacity-90 w-10 h-10 flex items-center justify-center rounded-full text-white transition"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/siyadMuhsin"
              target="_blank"
              className="bg-[#333333] hover:opacity-90 w-10 h-10 flex items-center justify-center rounded-full text-white transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/siyad-muhsin"
              target="_blank"
              className="bg-[#0077B5] hover:opacity-90 w-10 h-10 flex items-center justify-center rounded-full text-white transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://leetcode.com/u/SiyadMuhsin/"
              target="_blank"
              className="bg-[#FFA116] hover:opacity-90 w-10 h-10 flex items-center justify-center rounded-full text-white transition"
            >
              <Code size={18} />
            </a>
          </div>
                  </div>

        {/* Right Profile Section */}
      <div className="lg:w-2/5 relative flex justify-center">
      {/* Phone-like Frame Container */}
      <div className="relative">
        {/* Main phone frame */}
        <div className="relative w-80 h-96 bg-gradient-to-br from-green-500/20 via-green-400/20 to-green-700/20 rounded-[3rem] p-4 shadow-2xl backdrop-blur-sm border border-white/10">
          {/* Inner content area */}
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-green-400">
            {/* Character image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={300}
                height={300}
                className="object-cover w-full h-full rounded-[2.5rem]"
              />
            </div>
            
            {/* Floating 3D elements */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm animate-bounce">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/30 to-white/10 shadow-lg"></div>
            </div>
            <div className="absolute top-1/3 left-6 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm animate-bounce delay-150">
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-white/30 to-white/10 shadow-lg"></div>
            </div>
            <div className="absolute bottom-1/4 right-12 w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm animate-bounce delay-300">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/30 to-white/10 shadow-lg"></div>
            </div>
            <div className="absolute bottom-16 left-8 w-6 h-6 bg-white/20 rounded-lg backdrop-blur-sm animate-bounce delay-500">
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-white/30 to-white/10 shadow-lg"></div>
            </div>
          </div>
          
          {/* Phone details */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full"></div>
        </div>

        {/* Floating decorative elements around the phone */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg animate-float">
          <SiLeetcode size={28} color="#FFA116" /> {/* LeetCode Brand Color */}
        </div>
        <div className="absolute top-1/2 -left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg animate-float delay-200">
          <FaGithub size={26} color="#181717" /> {/* GitHub Brand Color */}
        </div>
        <div className="absolute -bottom-6 left-1/4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg animate-float delay-300">
          <FaLinkedin size={26} color="#0A66C2" /> {/* LinkedIn Brand Color */}
        </div>
      </div>
    </div>
      </div>
    </section>
  )
}
