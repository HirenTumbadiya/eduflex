import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
          const data = await response.json();
          const userId = data.userId; // Assuming the response data includes a property named 'userId'
          const token = data.token; // Assuming the response data includes a property named 'token'
          localStorage.setItem('userId', userId);
          localStorage.setItem('token', token);
          navigate('/')
      } else {
        // Login failed, handle error
        console.log('Login failed');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl text-center font-semibold mb-6">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full py-2 px-4 rounded-md border border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Log In
          </button>
        </form>
      <div className='flex w-full justify-between text-xs mt-3'>
        <div>
          <Link className='text-blue-700' to="/forgot-password">Forgot Password?</Link>
        </div>
        <div>
          <p>Not registered? <Link className='text-blue-700' to="/register">Create an account</Link></p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
