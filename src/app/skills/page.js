"use client"
import React, { useState, useEffect } from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiRedux, 
         SiNextdotjs, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, 
         SiMongodb, SiPostgresql, SiMysql, SiSocketdotio, SiGraphql, 
         SiAmazonaws, SiDocker, SiKubernetes, SiNginx, SiFirebase, 
         SiGit, SiGithub } from 'react-icons/si';
import { FaBrain, FaUsers, FaClock, FaLightbulb, FaBookReader, 
         FaFistRaised, FaUserFriends, FaChessKing, FaCalendarAlt, 
         FaListOl, FaTasks, FaRandom, FaGraduationCap, FaFire } from 'react-icons/fa';

const SkillsPage = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const hardSkills = [
    {
      name: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> }
      ]
    },
    {
      name: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
        { name: "REST APIs", icon: "🌐" },
        { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> }
      ]
    },
    {
      name: "Cloud & DevOps",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
        { name: "CI/CD", icon: "🔄" },
        { name: "Nginx", icon: <SiNginx className="text-[#009639]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
      ]
    },
    {
      name: "Tools & Others",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "MERN Stack", icon: "💻" },
        { name: "MVC Pattern", icon: "🏗️" },
        { name: "SOLID Principles", icon: "⭐" }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem-Solving", icon: <FaBrain />, description: "Analytical thinking and creative solutions" },
    { name: "Team Collaboration", icon: <FaUsers />, description: "Effective communication and teamwork" },
    { name: "Time Management", icon: <FaClock />, description: "Efficient task prioritization and execution" },
    { name: "Innovation", icon: <FaLightbulb />, description: "Creative approaches to challenges" },
    { name: "Continuous Learning", icon: <FaGraduationCap />, description: "Adapting to new technologies" },
    { name: "Leadership", icon: <FaChessKing />, description: "Guiding teams to success" },
    { name: "Adaptability", icon: <FaRandom />, description: "Thriving in changing environments" },
    { name: "Self-Motivation", icon: <FaFire />, description: "Driving personal and professional growth" }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20 relative z-10">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              My Skills
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full" />
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-8 leading-relaxed">
            A comprehensive showcase of my technical expertise and professional capabilities
          </p>
        </div>

        {/* Technical Skills Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hardSkills.map((category, index) => (
              <div 
                key={index}
                data-index={index}
                className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 ${
                  visibleCards.has(index.toString()) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="relative">
                  <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent flex items-center gap-3`}>
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`} />
                    {category.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-700/60 transition-colors"
                      >
                        <div className="text-2xl">
                          {typeof skill.icon === 'string' ? (
                            <span className="text-2xl">{skill.icon}</span>
                          ) : (
                            skill.icon
                          )}
                        </div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Soft Skills Section */}
        <section className="relative">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Professional Skills
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`group bg-gray-800/40 hover:bg-gray-700/60 rounded-xl p-6 border border-gray-600/30 hover:border-green-500/50 transition-all duration-300 ${
                    visibleCards.has(`soft-${index}`) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                  data-index={`soft-${index}`}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full mb-4">
                      <div className="text-green-400 text-2xl">
                        {skill.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;