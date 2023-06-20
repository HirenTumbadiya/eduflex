import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send password reset email to the provided email address
    try {
      // Make an API call to your backend to handle the password reset logic
      // Example: await axios.post('/api/forgot-password', { email });
      console.log(`Password reset email sent to: ${email}`);
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl text-center font-semibold">Forgot Password</h2>
        <p className="text-sm mb-6">Enter your email address to receive a password reset link.</p>
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
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
