import React from 'react';

const TechStack: React.FC = () => {
  const techs = [
    "Qwerty React",
    "Abcd CSS",
    "Mno Java",
    "Pqrs Node",
    "Xyzk Python",
  ]; // Replace with your list

  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:grid-cols-1">
          {techs.map((tech, index) => (
            <div key={index} className="p-4 bg-gray-700 rounded">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
export {};