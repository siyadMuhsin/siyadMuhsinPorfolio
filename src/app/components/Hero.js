"use client"
import { Download, Mail, Code, Github, Linkedin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.1, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className="w-1 h-1 bg-green-500 rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-9 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div variants={fadeInUp}>
              <p className="uppercase tracking-[0.3em] text-green-400 mb-4 text-sm font-medium">
                Welcome to my world ✨
              </p>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            >
              Hi, I&apos;m <span className="text-green-500 whitespace-nowrap">Siyad Muhsin K</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="h-20 mb-6">
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2000,
                  'Full Stack Engineer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Enthusiast',
                  2000
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-semibold text-green-400"
              />
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Results-driven Full Stack Developer with expertise in the MERN stack, passionate about designing robust, high-performing applications.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-medium transition-all"
              >
                <Download size={20} /> Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-medium transition-all"
              >
                <Mail size={20} /> Contact Me
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center lg:justify-start gap-5"
            >
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:siyadsm4065@gmail.com"
                className="bg-[#EA4335] hover:opacity-90 w-10 h-10 flex items-center justify-center rounded-full text-white transition"
              >
                <Mail size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/siyadMuhsin"
                target="_blank"
                className="bg-[#333333] hover:opacity-90 w-10 h-10 flex items-center justify-center rounded-full text-white transition"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com/in/siyad-muhsin"
                target="_blank"
                className="bg-[#0077B5] hover:opacity-90 w-10 h-10 flex items-center justify-center rounded-full text-white transition"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://leetcode.com/u/SiyadMuhsin/"
                target="_blank"
                className="bg-[#FFA116] hover:opacity-90 w-10 h-10 flex items-center justify-center rounded-full text-white transition"
              >
                <Code size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Profile Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 relative flex justify-center mt-10 lg:mt-0"
          >
            {/* Phone-like Frame Container */}
            <div className="relative">
              {/* Main phone frame */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative w-80 h-96 bg-gradient-to-br from-green-500/20 via-green-400/20 to-green-700/20 rounded-[3rem] p-4 shadow-2xl backdrop-blur-sm border border-white/10"
              >
                {/* Inner content area */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-green-400">
                  {/* Character image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/myImages/profile.jpg"
                      alt="Profile"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full rounded-[2.5rem]"
                    />
                  </div>
                  
                  {/* Floating 3D elements */}
                  <motion.div 
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm"
                  >
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/30 to-white/10 shadow-lg"></div>
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute top-1/3 left-6 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm"
                  >
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-white/30 to-white/10 shadow-lg"></div>
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 3, 0]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                    className="absolute bottom-1/4 right-12 w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm"
                  >
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/30 to-white/10 shadow-lg"></div>
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      y: [0, -12, 0],
                      rotate: [0, -3, 0]
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                    className="absolute bottom-16 left-8 w-6 h-6 bg-white/20 rounded-lg backdrop-blur-sm"
                  >
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-white/30 to-white/10 shadow-lg"></div>
                  </motion.div>
                </div>
                
                {/* Phone details */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full"></div>
              </motion.div>

              {/* Floating decorative elements around the phone */}
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
              >
                <SiLeetcode size={28} color="#FFA116" />
              </motion.div>
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="absolute top-1/2 -left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaGithub size={26} color="#181717" />
              </motion.div>
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
                className="absolute -bottom-6 left-1/4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FaLinkedin size={26} color="#0A66C2" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}