import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }

    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, username }),
      });

      if (response.ok) {
        navigate('/login')
        console.log('Registration successful');
      } else {
        // Registration failed, handle error
        setRegistrationError('Registration failed');
      }
    } catch (error) {
      console.log('Error:', error);
      setRegistrationError('Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl text-center font-semibold mb-6">Register</h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full py-2 px-4 rounded-md border border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={name}
              onChange={handleNameChange}
              required
            />
            {nameError && <p className="absolute text-red-500">{nameError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full py-2 px-4 rounded-md border border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            {usernameError && <p className="absolute text-red-500">{usernameError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full py-2 px-4 rounded-md border border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="absolute text-red-500">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full py-2 px-4 rounded-md border border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <p className="absolute text-red-500">{passwordError}</p>}
          {registrationError && <p className="absolute text-red-500">{registrationError}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-indigo-600 transition-colors"
          >
            Register
          </button>
          <Link to="/login" className="text-blue-700 text-sm">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
