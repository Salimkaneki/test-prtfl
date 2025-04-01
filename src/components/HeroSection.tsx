import React from "react";

const HeroSection: React.FC = () => {
    return(
        <section className="py-20 px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-5xl font-bold leading-tight">
                    Hi, I'm <span className="text-indigo-600">David</span>
                    <br />Creative Developer
                </h1>
                
                <p className="text-gray-600 text-lg max-w-md">
                    Crafting intuitive digital experiences through clean and efficient code. Specialized in frontend development with a passion for UI/UX.
                </p>

                <div className="flex gap-4 pt-4">
                    <button className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors">
                        Projets
                    </button>

                    <button className="border-2 border-gray-300 font-medium py-3 px-6 rounded-md hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                        Contact
                    </button>
                </div>

                <div className="flex gap-12 pt-8">
                    <div>
                        <h3 className="text-3xl font-bold">3+</h3>
                        <p className="text-gray-500">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">20+</h3>
                        <p className="text-gray-500">Projects Completed</p>
                    </div>
                </div>

                <div className="md:w-1/2 space-y-6">
                <div className="bg-indigo-100 absolute -z-10 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img 
                    src="/api/placeholder/480/560" 
                    alt="Professional portrait" 
                    className="relative z-10 rounded-xl shadow-lg mx-auto"
                />
                </div>

                </div>
        
            </div>
        </section>
    );
}

export default HeroSection;
