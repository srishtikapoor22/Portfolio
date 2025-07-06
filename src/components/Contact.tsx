import React from 'react';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 bg-gray-700 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 bg-gray-700 rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 mb-4 bg-gray-700 rounded h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
            <p className="mb-4">I’m always open to discussing new projects, opportunities, or just having a chat about tech!</p>
            <div className="space-y-2">
              <p>Email: xyz@abc.com</p>
              <p>LinkedIn: https://qwerty.social</p>
              <p>Twitter: https://mno.social</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
export {};