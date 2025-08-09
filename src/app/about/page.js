"use client";
import { motion } from "framer-motion";
import {
  Wrench,
  Code,
  Server,
  BookOpen,
  Users,
  Eye,
  Rocket,
  Target,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left - Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-green-500/30 hover:border-green-500/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent rounded-full"></div>
              <Image
                src="/myImages/profile.jpg"
                alt="Siyad Muhsin K"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-2/3 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Siyad Muhsin K
            </h1>
            <h2 className="text-xl md:text-2xl text-green-400 mb-6 font-light">
              Full Stack Developer | Adaptable, Detail-Oriented, and Driven to
              Deliver Impact
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed font-light">
              A results-focused developer specializing in the MERN stack, with a
              proven ability to quickly adapt to new challenges and
              technologies. Dedicated to building scalable, efficient, and
              user-centric applications that make a measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Journey & Achievements - Side by Side */}
      <section className="bg-gray-900/50 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            My Journey & Achievements
          </motion.h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Career Journey */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInLeft}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-green-400 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Code className="text-black" size={16} />
                </div>
                Career Journey
              </h3>

              {/* Timeline Items */}
              <div className="space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-500/30"></div>

                {/* Lift & Escalator Mechanic Training */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative flex gap-6 group"
                >
                  <div className="relative z-10 bg-green-500 p-3 rounded-full group-hover:bg-green-400 transition-colors duration-300">
                    <Wrench className="text-black" size={20} />
                  </div>
                  <div className="flex-1 bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Lift & Escalator Mechanic Training
                    </h4>
                    <p className="text-green-400 mb-3 font-medium">2020–2022</p>
                    <p className="text-gray-300 leading-relaxed">
                      Completed a Diploma in Lift and Escalator Mechanics at Government ITI Areekode, 
                      where I built a solid foundation in mechanical systems, safety protocols, and problem-solving under real-world conditions.
                    </p>
                  </div>
                </motion.div>

                {/* Lift Technician Trainee */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative flex gap-6 group"
                >
                  <div className="relative z-10 bg-green-500 p-3 rounded-full group-hover:bg-green-400 transition-colors duration-300">
                    <Users className="text-black" size={20} />
                  </div>
                  <div className="flex-1 bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Lift Technician Trainee
                    </h4>
                    <p className="text-green-400 mb-3 font-medium">2022–2023</p>
                    <p className="text-gray-300 leading-relaxed">
                      Worked at Johnson Lifts Pvt. Ltd., Ernakulam, for one year as a Lift Technician Trainee. 
                      This role enhanced my hands-on expertise and strengthened my teamwork, adaptability, and technical communication skills.
                    </p>
                  </div>
                </motion.div>

                {/* Career Start in IT */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative flex gap-6 group"
                >
                  <div className="relative z-10 bg-green-500 p-3 rounded-full group-hover:bg-green-400 transition-colors duration-300">
                    <Code className="text-black" size={20} />
                  </div>
                  <div className="flex-1 bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Career Start in IT
                    </h4>
                    <p className="text-green-400 mb-3 font-medium">2024</p>
                    <p className="text-gray-300 leading-relaxed">
                      Began my journey into the IT field through <span className="text-green-400 font-semibold">Brocamp</span>, a 
                      10-month intensive self-learning program focused on software development.  
                      This is where I wrote my first lines of code, built foundational programming 
                      skills, and developed a strong understanding of modern web technologies.
                    </p>
                  </div>
                </motion.div>

                {/* Current Focus */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative flex gap-6 group"
                >
                  <div className="relative z-10 bg-green-500 p-3 rounded-full group-hover:bg-green-400 transition-colors duration-300">
                    <Server className="text-black" size={20} />
                  </div>
                  <div className="flex-1 bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Current Focus
                    </h4>
                    <p className="text-green-400 mb-3 font-medium">2025–Present</p>
                    <p className="text-gray-300 leading-relaxed">
                      My current goal is to apply my skills and experience in real-world company 
                      projects. Specializing in the MERN stack and familiar with DevOps tools 
                      like Docker and AWS, I am eager to contribute to scalable, impactful 
                      solutions while continuing to learn and grow.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Achievements */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-green-400 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Target className="text-black" size={16} />
                </div>
                Achievements & Milestones
              </h3>

              <div className="grid gap-6">
                {[
                  {
                    title: "Career Transition",
                    description: "Successfully pivoted from mechanical engineering to software development",
                    icon: <Rocket className="text-orange-500" size={24} />,
                  },
                  {
                    title: "Full-Stack Projects",
                    description: "Built and deployed multiple full-stack applications using MERN stack",
                    icon: <Code className="text-blue-500" size={24} />,
                  },
                  {
                    title: "Remote Collaboration",
                    description: "Worked effectively with remote teams across different time zones",
                    icon: <Users className="text-purple-500" size={24} />,
                  },
                  {
                    title: "Technical Training",
                    description: "Completed intensive MERN stack development program",
                    icon: <BookOpen className="text-yellow-500" size={24} />,
                  },
                  {
                    title: "Open Source",
                    description: "Contributed to open source projects and shared personal projects",
                    icon: <Github className="text-gray-400" size={24} />,
                  },
                  {
                    title: "Problem Solving",
                    description: "Solved 100+ problems on coding platforms (LeetCode, CodeWars)",
                    icon: <Target className="text-red-500" size={24} />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={scaleUp}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm group hover:bg-gray-800/70"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-700/50 p-3 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let s Build Something 
              <span className="text-green-400"> Together</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              I m always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <a
                href="https://linkedin.com/in/siyad-muhsin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/siyadMuhsin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-800/25 border border-gray-600 hover:border-gray-500"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="mailto:siyadsm4065@gmail.com"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/25"
              >
                <Mail size={20} />
                Email Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}