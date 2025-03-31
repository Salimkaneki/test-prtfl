import React from 'react';
// import { Button } from '../ui/Button'; // Assurez-vous que ce composant existe

const Navbar: React.FC = () => {
  const navLinks = [
    { id: 1, text: 'About Me', url: '#about' },
    { id: 2, text: 'Skills', url: '#skills' },
    { id: 3, text: 'Project', url: '#project' },
    { id: 4, text: 'Contact Me', url: '#contact' }
  ];
  
  return (
    <nav className="flex items-center space-x-4">
      <ul className="flex space-x-8 mr-8">
        {navLinks.map(link => (
          <li key={link.id}>
            <a 
              href={link.url} 
              className="font-medium hover:text-gray-600 transition duration-300"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      {/* <button className="bg-black text-white py-2 px-4 rounded-md flex items-center"> Boutton</button> */}

    </nav>
  );
};

export default Navbar;