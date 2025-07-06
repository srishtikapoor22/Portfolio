import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <section id={id} className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: '#000' } },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: { enable: true, minimumValue: 1 } },
            move: { enable: true, speed: 2 },
          },
        }}
      />
      <motion.div
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