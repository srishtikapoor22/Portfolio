import React from 'react';

interface TimelineProps {
  id: string;
}

const Timeline: React.FC<TimelineProps> = ({ id }) => {
  const journey = [
    { year: "2023", event: "Edu: Joined Xyzkqw Univ" },
    { year: "2024", event: "Cert: Earned Jklm Nopq" },
    { year: "2025", event: "Hack: Won Vwxy Zabc" },
  ];

  return (
    <section id={id} className="bg-gray-700 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Journey</h2>
        <div className="relative">
          {journey.map((item, index) => (
            <div key={index} className="mb-8 flex items-center">
              <div className="w-1/12 text-right pr-4">{item.year}</div>
              <div className="w-1px h-10 bg-white mx-4"></div>
              <div className="w-10/12">
                <div className="bg-gray-800 p-4 rounded">{item.event}</div>
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