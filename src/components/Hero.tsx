import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Hero: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 0.5 },
            links: { enable: true, distance: 150 },
          },
        }}
        className="absolute inset-0"
      />
      <motion.div // Ensure this uses motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Srishti Kapoor</h1>
        <p className="text-xl md:text-2xl mb-6">Aspiring Full-Stack Developer & AI Enthusiast from Xyzkqw Pqrs</p>
        <p className="text-lg mb-4">Certifications: Jklm Nopq Rstu</p>
        <p className="text-lg mb-6">Hackathons: Vwxy Zabc Defg</p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.linkedin.com/in/srishtikapoor22"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4"
        >
          Connect on LinkedIn
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://github.com/srishtikapoor22"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded"
        >
          GitHub Profile
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
export {};