import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sidebar bg-gray-200 h-screen w-64 flex-shrink-0">
      <div className="sidebar-header flex items-center justify-between px-4 py-2">
        <h3 className="text-4xl font-bold flex justify-center items-center m-5">EDUFLEX</h3>
        <button
          className="mobile-menu-toggle md:hidden text-gray-600 focus:outline-none focus:text-gray-800"
          onClick={handleMobileMenuToggle}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${isMobileMenuOpen ? 'hidden' : 'block'}`}
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={`${isMobileMenuOpen ? 'block' : 'hidden'}`}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`sidebar-nav mt-4 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:block md:mt-0`}
      >
        <li>
          <Link
            to="/"
            className={`block px-4 py-2 rounded ${
              pathname === '/' ? 'bg-gray-300' : ''
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className={`block px-4 py-2 rounded ${
              pathname === '/dashboard' ? 'bg-gray-300' : ''
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/myprofile"
            className={`block px-4 py-2 rounded ${
              pathname === '/dashboard/myprofile' ? 'bg-gray-300' : ''
            }`}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/setting"
            className={`block px-4 py-2 rounded ${
              pathname === '/dashboard/setting' ? 'bg-gray-300' : ''
            }`}
          >
            Settings
          </Link>
        </li>
        {/* Add more sidebar links here */}
      </ul>
    </div>
  );
};

export default Sidebar;
