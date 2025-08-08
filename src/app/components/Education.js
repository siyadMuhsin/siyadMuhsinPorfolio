import { GraduationCap, Calendar } from 'lucide-react'

export default function Education() {
  const educationData = [
    {
      title: "MERN Stack Development",
      institution: "Brototype, Calicut",
      period: "2024 – Present",
      description: "Comprehensive full-stack development program focusing on MongoDB, Express.js, React, and Node.js technologies.",
      status: "In Progress"
    },
    {
      title: "Diploma in Lift and Escalator Mechanic",
      institution: "Govt ITI Areacode",
      period: "2020 – 2022",
      description: "Technical diploma program covering mechanical systems, electrical components, and maintenance procedures for vertical transportation systems.",
      status: "Completed"
    },
    {
      title: "Higher Secondary Education",
      institution: "CHMHSS Pookolathur",
      period: "2018 – 2020",
      description: "Completed higher secondary education with focus on science and mathematics, building a strong foundation for technical studies.",
      status: "Completed"
    }
  ]

  return (
    <section id="education" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
            My <span className="text-green-500">Education</span>
          </h2>
          
          <div className="space-y-6">
            {educationData.map((education, index) => (
              <div 
                key={index} 
                className="relative bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-green-500 transition-all duration-300"
              >
                {/* Timeline indicator */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-800 -translate-x-1/2"></div>
                <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-green-500 -translate-x-1/2"></div>
                
                <div className="flex gap-4 pl-8">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <GraduationCap size={20} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <h3 className="text-xl font-semibold text-white">
                        {education.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mt-1 sm:mt-0">
                        <Calendar size={14} />
                        <span>{education.period}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg text-green-400 font-medium mb-2">
                      {education.institution}
                    </h4>
                    
                    <p className="text-gray-400 mb-4">
                      {education.description}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        education.status === 'In Progress' 
                          ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                          : 'bg-green-500/10 text-green-400 border border-green-500/20'
                      }`}>
                        {education.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}