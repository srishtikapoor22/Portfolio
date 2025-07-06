import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between">
        <h3 className="text-xl font-bold">Srishti Kapoor</h3>
        <ul className="flex space-x-6">
          <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="techstack" smooth={true} duration={500}>Tech Stack</Link></li>
          <li><Link to="timeline" smooth={true} duration={500}>My Journey</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
export {};