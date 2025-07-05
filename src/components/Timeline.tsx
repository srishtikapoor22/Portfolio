import React from 'react';

const Timeline: React.FC = () => {
  const timeline = [
    { year: "2023", event: "Joined Xyzkqw Univ" },
    { year: "2024", event: "Won Jklm Hackathon" },
    { year: "2025", event: "Started Pqrs Project" },
  ];

  return (
    <section className="bg-gray-700 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Journey</h2>
        <div className="relative">
          {timeline.map((item, index) => (
            <div key={index} className="mb-8 flex items-center">
              <div className="w-1/12 text-right pr-4">{item.year}</div>
              <div className="w-1px h-10 bg-white mx-4"></div>
              <div className="w-10/12">
                <div className="bg-gray-800 p-4 rounded shadow-lg">{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
export {};