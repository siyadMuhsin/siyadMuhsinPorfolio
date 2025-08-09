import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-black ">
      <div className="container mx-auto ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            About <span className="text-green-600 dark:text-green-400">Me</span>
          </h2>

          <div className="bg-gray-50 dark:bg-black rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-10">
            
            {/* Image - Far Left */}
            <div className="w-full lg:w-1/3 flex justify-start">
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-green-600">
                <Image
                  src="/profile.jpeg" // <-- Change to your image path
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text - Far Right */}
            <div className="w-full lg:w-2/3 flex justify-end">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Profile Summary
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Results-driven Full Stack Developer with expertise in the MERN stack, 
                    passionate about designing robust, high-performing applications. I bring 
                    a unique combination of technical proficiency and creative problem-solving 
                    to every project I work on.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Proficient in JavaScript and TypeScript, I have strong problem-solving 
                    skills and am committed to delivering impactful contributions in web 
                    development. My experience spans across frontend and backend technologies, 
                    allowing me to build complete, scalable solutions.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I'm particularly passionate about creating user-centric applications 
                    that not only meet technical requirements but also provide exceptional 
                    user experiences. My expertise in Data Structures & Algorithms helps 
                    me write efficient, optimized code that performs well at scale.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
