import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="py-20 px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Texte et CTA */}
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-5xl font-bold leading-tight">
                    Hi, I'm <span className="text-indigo-600 relative inline-block">
                        David
                        <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-200 -z-10 transform -rotate-1"></span>
                    </span>
                    <br />Creative Developer
                </h1>
                
                <p className="text-gray-600 text-lg max-w-md">
                    Crafting intuitive digital experiences through clean and efficient code. Specialized in frontend development with a passion for UI/UX.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                    <button className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Projets
                    </button>
                    <button className="border-2 border-gray-300 font-medium py-3 px-6 rounded-md hover:border-indigo-600 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Contact
                    </button>
                </div>
                
                <div className="flex gap-12 pt-8">
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-3xl font-bold text-indigo-600">3+</h3>
                        <p className="text-gray-500">Years Experience</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-3xl font-bold text-indigo-600">20+</h3>
                        <p className="text-gray-500">Projects Completed</p>
                    </div>
                </div>
                
                <div className="flex gap-4 pt-6">
                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </div>
            </div>
            
            {/* Image avec animation et style amélioré */}
            <div className="md:w-1/2 relative h-[400px] flex items-center justify-center">
                <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute w-64 h-64 rounded-full border-4 border-dashed border-indigo-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <img 
                    src="https://img.freepik.com/vecteurs-libre/illustration-dessinee-main-generation-alpha_23-2151254927.jpg?t=st=1743535187~exp=1743538787~hmac=3970c1a62921395d553cb1752688a159903a8a8c9f5bdfa3c556e496454b40cb&w=740" 
                    alt="Professional portrait" 
                    className="relative z-10 rounded-xl shadow-xl max-w-[80%] max-h-[90%] object-contain transform transition-transform duration-500 hover:scale-105"
                />
                
                <div className="absolute top-0 right-0 -mr-4 mt-8 bg-white p-3 rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </div>
                
                <div className="absolute bottom-0 left-0 -ml-4 mb-8 bg-white p-3 rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;