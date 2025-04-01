import React from "react";

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 px-8 max-w-screen-xl mx-auto bg-gray-50">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Titre */}
                <h2 className="text-4xl font-bold text-center leading-tight">
                    About <span className="text-indigo-600 relative inline-block">
                        Me
                        <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-200 -z-10 transform -rotate-1"></span>
                    </span>
                </h2>
                
                {/* Paragraphe d'introduction */}
                <p className="text-gray-600 text-lg text-center">
                    Passionate front-end developer with over 3 years of experience creating responsive 
                    and user-friendly interfaces. I combine technical expertise with creative problem-solving 
                    to deliver exceptional digital experiences.
                </p>
                
                {/* Parcours / Timeline */}
                <div className="space-y-6 pt-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                <path d="M6 12v5c0 2 1 3 3 3h6c2 0 3-1 3-3v-5"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Master in Computer Science</h3>
                            <p className="text-gray-500 text-sm">University of Technology • 2018-2020</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Front-end Developer</h3>
                            <p className="text-gray-500 text-sm">InnoTech Solutions • 2020-2022</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                                <path d="M12 20h9"/>
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Senior UI/UX Developer</h3>
                            <p className="text-gray-500 text-sm">Creative Studio • 2022-Present</p>
                        </div>
                    </div>
                </div>
                
                {/* Citation */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 mt-8">
                    <p className="text-gray-600 italic">
                        "I believe that great code not only works well but also reads well. Clean architecture and attention to detail are at the heart of everything I build."
                    </p>
                </div>
                
                {/* Compétences */}
                <div className="pt-6">
                    <h3 className="text-2xl font-bold mb-4 text-center">Skills</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="bg-white px-4 py-2 rounded-full shadow-sm text-indigo-600 border border-indigo-200">React</span>
                        <span className="bg-white px-4 py-2 rounded-full shadow-sm text-indigo-600 border border-indigo-200">TypeScript</span>
                        <span className="bg-white px-4 py-2 rounded-full shadow-sm text-indigo-600 border border-indigo-200">JavaScript</span>
                        <span className="bg-white px-4 py-2 rounded-full shadow-sm text-indigo-600 border border-indigo-200">Tailwind CSS</span>
                        <span className="bg-white px-4 py-2 rounded-full shadow-sm text-indigo-600 border border-indigo-200">Node.js</span>
                        <span className="bg-white px-4 py-2 rounded-full shadow-sm text-indigo-600 border border-indigo-200">UI/UX Design</span>
                    </div>
                </div>
                
                {/* Bouton */}
                <div className="pt-6 flex justify-center">
                    <button className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Télécharger CV
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;