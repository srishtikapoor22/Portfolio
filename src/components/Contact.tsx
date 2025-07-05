import React from 'react';

const Contact: React.FC = () => {
  const contacts = [
    { type: "Email", value: "xyz@abc.com" },
    { type: "LinkedIn", value: "https://qwerty.social" },
    { type: "Twitter", value: "https://mno.social" },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded">
              <h3 className="text-xl mb-2">{contact.type}</h3>
              <p>{contact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
export {};