import React from 'react';

const ContactSection = () => {
  return (
<section className="py-12 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum massa quis nunc pulvinar placerat. Fusce condimentum luctus nunc, ac porttitor mi venenatis non.
        </p>
        <p className="text-gray-700 font-medium">Email: tumbadiyahiren@gmail.com</p>
        <p className="text-gray-700 font-medium">Phone: +1234567890</p>
        <p className="text-gray-700 font-medium">Address: 123 Street, Gujarat, India</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Send us a message</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input type="text" id="name" className="w-full rounded-md  border-gray-300 border-2 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input type="email" id="email" className="w-full rounded-md border-gray-300 border-2 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" rows="4" className="w-full rounded-md border-gray-300 border-2 focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default ContactSection;
