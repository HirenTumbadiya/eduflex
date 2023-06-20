import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../asset/images/avatar.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in (you can modify this logic based on your authentication system)
    const user = localStorage.getItem('userId');
    setIsLoggedIn(!!user);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAvatarClick = () => {
    navigate('/dashboard')
  };

  return (
    <nav className='z-20 shadow-lg rounded-2xl flex flex-wrap items-center justify-between px-6 py-4 fixed w-full top-0 bg-white'>
      <div className='flex items-center mr-6'>
        <h1 className='font-bold text-2xl'>EDUFLEX</h1>
      </div>
      <div className='block lg:hidden'>
        {/* Hamburger menu icon */}
        <button
          className='flex items-center px-3 py-2 border rounded  border-white'
          onClick={toggleMenu}
        >
          <svg
            className='w-4 h-4 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z' />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
          <li className='nav-item'>
            <Link to='/' className='px-3 py-2 hover:text-blue-200'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/courses' className='px-3 py-2 hover:text-blue-200'>
              Courses
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/workshops' className='px-3 py-2 hover:text-blue-200'>
              Workshop
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='px-3 py-2 hover:text-blue-200'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blog' className='px-3 py-2 hover:text-blue-200'>
              Blog
            </Link>
          </li>
          {!isLoggedIn && (
            <>
              <li className='nav-item'>
                <Link to='/login' className='px-3 py-2 hover:text-blue-200'>
                  Login
                </Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li className='nav-item'>
              <button
                onClick={handleAvatarClick}
                className='px-3 flex items-center hover:text-blue-200'
              >
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-6 h-6 rounded-full mr-2"
                />
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
