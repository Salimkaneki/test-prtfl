import React from "react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column: Text and CTA */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-indigo-600 font-medium tracking-wider">PORTFOLIO</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hi, I'm <span className="text-indigo-600 relative inline-block">
                Salim PEREIRA
                <span className="absolute bottom-1 left-0 w-full h-3 bg-indigo-200 -z-10 transform -rotate-1"></span>
              </span>
              <br />Creative Developer
            </h1>
            
            <p className="text-gray-600 text-lg max-w-md">
              Crafting intuitive digital experiences through clean and efficient code. 
              Specialized in frontend development with a passion for UI/UX.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button 
              className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-md hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              View Projects
            </button>
            <button 
              className="border-2 border-gray-300 font-medium py-3 px-6 rounded-md hover:border-indigo-600 hover:text-indigo-600 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Contact Me
            </button>
          </div>
          
          <div className="flex gap-12 pt-4">
            <div className="flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-bold text-indigo-600">3+</h3>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div className="flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-bold text-indigo-600">20+</h3>
              <p className="text-gray-500">Projects Completed</p>
            </div>
          </div>
          
          <div className="flex gap-5 pt-6">
            <a 
              href="#" 
              className="text-gray-600 hover:text-indigo-600 hover:-translate-y-1 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-indigo-600 hover:-translate-y-1 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-indigo-600 hover:-translate-y-1 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right column: Image */}
        <div className="relative h-[450px] flex items-center justify-center">
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          
          <div 
            className="absolute w-64 h-64 rounded-full border-4 border-dashed border-indigo-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin"
            style={{ animationDuration: '40s' }}
          ></div>
          
          <img 
            src="/api/placeholder/400/450" 
            alt="Professional portrait" 
            className="relative z-10 rounded-2xl shadow-xl max-w-[85%] max-h-[90%] object-cover hover:scale-105 transition-transform"
          />
          
          <div 
            className="absolute top-10 right-0 bg-white p-3 rounded-lg shadow-md"
          >
            <div className="text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
          </div>
          
          <div 
            className="absolute bottom-10 left-0 bg-white p-3 rounded-lg shadow-md"
          >
            <div className="text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>
          
          <div 
            className="absolute bottom-1/4 right-1/4 bg-white p-2 rounded-full shadow-md"
          >
            <div className="text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;