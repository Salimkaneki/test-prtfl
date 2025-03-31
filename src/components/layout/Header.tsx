import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 flex justify-between items-center max-w-screen-xl mx-auto">
      <div className="logo flex items-center">
        <span className="text-3xl mr-2">𝄢</span> {/* Symbole musical comme logo */}
        <span className="font-bold text-xl">Personal</span>
      </div>
      <Navbar />

    <button className="bg-black text-white py-2 px-4 rounded-md flex items-center"> Boutton</button>

    </header>
  );
};

export default Header;