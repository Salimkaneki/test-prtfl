import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-8 flex items-center justify-between  mx-auto font-sora sticky top-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      {/* Logo à gauche */}
      <div className="logo flex items-center cursor-pointer">
        <span className="text-3xl mr-2 text-indigo-600">𝄢</span>
        <span className="font-bold text-xl hover:text-indigo-600 transition-colors">Personal</span>
      </div>
      
      {/* Navigation au milieu */}
      <Navbar />
      
      {/* Bouton à droite */}
      <button 
        className="bg-black text-white py-2.5 px-5 rounded-md flex items-center font-medium hover:bg-gray-800 transition-colors duration-300 text-sm">
        Resume
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </button>
    </header>
  );
};

export default Header;