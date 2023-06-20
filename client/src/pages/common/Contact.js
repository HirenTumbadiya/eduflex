import React from 'react';

const Contact = () => {
  return (
    <div className="m-20">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                rows="5"
                id="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">
            <i className="fas fa-phone mr-2"></i> Phone: 123-456-7890
          </p>
          <p className="mb-2">
            <i className="fas fa-envelope mr-2"></i> Email: info@example.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt mr-2"></i> Address: 123 Main Street, City, State
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
