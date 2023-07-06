import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center mt-2">
          <ul className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start space-x-4">
            <li>
              <a href="/about" className="text-white hover:text-gray-400 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-400 transition-colors duration-300">About Us</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-400 transition-colors duration-300">Contact</a>
            </li>
            <li>
              <a href="/privacy" className="text-white hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="text-white hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
            </li>
          </ul>
          <p className="text-white text-sm mt-4 md:mt-0 text-center md:text-left">&copy; {new Date().getFullYear()} Stock Market Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
