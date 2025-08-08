"use client"
import { useState } from "react"
import * as SiIcons from "react-icons/si" // import all simple-icons from react-icons

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null)

  // Helper to get icon from react-icons if available, else fallback emoji
  const getIcon = (iconName, emoji, color) => {
    const IconComponent = SiIcons[iconName]
    return IconComponent ? <IconComponent color={color} /> : emoji
  }

  const categories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML", icon: getIcon("SiHtml5", "🌐", "#E34F26") },
        { name: "CSS", icon: getIcon("SiCss3", "🎨", "#1572B6") },
        { name: "JavaScript", icon: getIcon("SiJavascript", "⚡", "#F7DF1E") },
        { name: "TypeScript", icon: getIcon("SiTypescript", "📘", "#3178C6") },
        { name: "React.js", icon: getIcon("SiReact", "⚛️", "#61DAFB") },
        { name: "Redux", icon: getIcon("SiRedux", "🔄", "#764ABC") },
        { name: "Next.js", icon: getIcon("SiNextdotjs", "▲", "#000000") },
        { name: "TailwindCSS", icon: getIcon("SiTailwindcss", "💨", "#38B2AC") },
        { name: "Bootstrap", icon: getIcon("SiBootstrap", "🅱️", "#7952B3") },
        { name: "EJS", icon: "📝" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: getIcon("SiNodedotjs", "🟢", "#339933") },
        { name: "Express.js", icon: getIcon("SiExpress", "🚀", "#000000") },
        { name: "MongoDB", icon: getIcon("SiMongodb", "🍃", "#47A248") },
        { name: "PostgreSQL", icon: getIcon("SiPostgresql", "🐘", "#336791") },
        { name: "MySQL", icon: getIcon("SiMysql", "🐬", "#4479A1") },
        { name: "Socket.io", icon: getIcon("SiSocketdotio", "🔌", "#010101") },
        { name: "REST APIs", icon: "🌐" },
        { name: "GraphQL", icon: getIcon("SiGraphql", "📊", "#E10098") },
        { name: "SSL", icon: "🔐" }
      ]
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, DynamoDB, ELB)", icon: getIcon("SiAmazon", "☁️", "#FF9900") },
        { name: "AWS Cloud Services", icon: "🔧" },
        { name: "Docker", icon: getIcon("SiDocker", "🐳", "#2496ED") },
        { name: "Docker Compose", icon: "🐳" },
        { name: "Kubernetes", icon: getIcon("SiKubernetes", "⚓", "#326CE5") },
        { name: "CI/CD", icon: "🔄" },
        { name: "CI/CD Pipeline", icon: "⚙️" },
        { name: "Nginx", icon: getIcon("SiNginx", "🌊", "#009639") },
        { name: "Firebase", icon: getIcon("SiFirebase", "🔥", "#FFCA28") }
      ]
    },
    {
      name: "Other Skills",
      skills: [
        { name: "Git", icon: getIcon("SiGit", "🔀", "#F05032") },
        { name: "GitHub", icon: getIcon("SiGithub", "🐙", "#181717") },
        { name: "Networking", icon: "🌐" },
        { name: "SSH", icon: "🔑" },
        { name: "MVC", icon: "🏗️" },
        { name: "Repository Design Pattern", icon: "📚" },
        { name: "SOLID Principles", icon: "⭐" },
        { name: "Full-Stack Web Development", icon: "🚀" },
        { name: "MERN Stack", icon: "💻" }
      ]
    }
  ]

return (
  <section className="bg-black py-14 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-16 left-16 w-24 h-24 border border-green-500 rounded-full"></div>
      <div className="absolute top-28 right-28 w-20 h-20 border border-green-500 rounded-full"></div>
      <div className="absolute bottom-24 left-1/3 w-28 h-28 border border-green-500 rounded-full"></div>
      <div className="absolute bottom-14 right-14 w-16 h-16 border border-green-500 rounded-full"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-green-500 mb-3 tracking-wide">
          Skills
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
        <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto leading-relaxed">
          Comprehensive technical expertise across the full development stack
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-8">
        {categories.map((category, i) => (
          <div 
            key={i}
            className="group"
            onMouseEnter={() => setHoveredCategory(i)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-green-400 tracking-wide">
                {category.name}
              </h3>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
              <div className="text-green-400 text-xs font-medium bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">
                {category.skills.length} Skills
              </div>
            </div>

            {/* Scrolling Skills */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10"></div>
              
              <div className="overflow-hidden whitespace-nowrap">
                <div
                  className="flex gap-4 animate-scroll"
                  style={{
                    animation: `scroll ${9 + i * 1.5}s linear infinite`,
                    animationPlayState: hoveredCategory === i ? 'paused' : 'running'
                  }}
                >
                  {[...category.skills, ...category.skills].map((skill, idx) => (
                    <div
                      key={idx}
                      className="group/skill inline-flex items-center gap-3 text-base lg:text-lg text-white px-4 py-3 rounded-xl border border-green-500/40 bg-gray-900/30 backdrop-blur-sm hover:border-green-500/80 hover:bg-green-500/10 transition-all duration-300 cursor-default min-w-fit whitespace-nowrap shadow-md hover:shadow-green-500/20"
                    >
                      <span className="text-xl lg:text-2xl filter drop-shadow-lg">
                        {skill.icon}
                      </span>
                      <span className="font-semibold tracking-wide group-hover/skill:text-green-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-10 h-0.5 bg-green-500/50"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300"></div>
          <div className="w-10 h-0.5 bg-green-500/50"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes scroll {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .animate-scroll { animation: none; }
      }
    `}</style>
  </section>
);

}
