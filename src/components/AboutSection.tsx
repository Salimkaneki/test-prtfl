import React from "react";

const AboutSection = () => {
  const skills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "UI/UX Design", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "TypeScript", percentage: 70 }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-100 rounded-full opacity-60 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full opacity-60 transform translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-indigo-200 rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-block text-indigo-600 font-medium text-sm tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight text-gray-900">Discover My Journey</h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-10 h-1 bg-indigo-200 rounded-full"></div>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full mx-2"></div>
            <div className="w-10 h-1 bg-indigo-200 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image column with animations */}
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl opacity-50 blur-xl group-hover:opacity-70 transition duration-1000"></div>
            <div className="relative h-[450px] w-full rounded-xl overflow-hidden transform transition duration-700 group-hover:-translate-y-2 shadow-2xl">
              <img 
                src="/api/placeholder/500/600" 
                alt="Salim PEREIRA" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent"></div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white rounded-lg flex items-center justify-center text-center shadow-xl transform group-hover:rotate-3 group-hover:scale-110 transition-all duration-500">
                <div>
                  <p className="text-4xl font-bold text-indigo-600">5+</p>
                  <p className="text-sm text-gray-600 font-medium">Years of<br/>Experience</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-40 h-40 border-4 border-indigo-600/30 rounded-lg transform rotate-6 group-hover:rotate-12 transition-all duration-700"></div>
              <div className="absolute -top-3 -left-3 w-40 h-40 border-4 border-indigo-600/40 rounded-lg transform -rotate-3 group-hover:-rotate-6 transition-all duration-700"></div>
            </div>
          </div>
          
          {/* Text column with animations */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 relative inline-block">
                Frontend Developer & UI/UX Specialist
                <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-200"></span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hello! I'm <span className="text-indigo-600 font-semibold">Salim PEREIRA</span>, a passionate frontend developer with a keen eye for aesthetics and a strong technical foundation. I blend creative design with clean code to craft digital experiences that not only look stunning but are also intuitive and user-friendly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With 5+ years of experience in the industry, I've developed a deep understanding of user behavior and modern web technologies. My approach focuses on creating responsive, accessible, and high-performance applications that truly connect with users.
              </p>
            </div>
            
            {/* Skills section */}
            <div className="space-y-5">
              <h4 className="text-xl font-semibold text-gray-800">My Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-indigo-600 font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transform origin-left transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Personal info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date of Birth</p>
                  <p className="font-medium text-gray-800">15.05.1990</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-800">+33 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">salim@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-800">Paris, France</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Me
              </a>
              <a 
                href="#" 
                className="inline-flex items-center border-2 border-indigo-600 text-indigo-600 font-medium py-3 px-6 rounded-lg hover:bg-indigo-50 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;