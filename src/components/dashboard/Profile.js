import React from 'react';

const ProfilePage = () => {
  // Dummy user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    membership: 'Gold',
    joinDate: 'January 1, 2022',
    avatar: 'https://example.com/avatar.jpg', // URL to user's avatar image
    // Add more user details as needed
  };

  return (
    <div className="m-20">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Profile Dashboard</h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/4">
          <img
            className="w-32 h-32 rounded-full mb-4"
            src={user.avatar}
            alt="User Avatar"
          />
          <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
          <p>
            <span className="font-bold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-bold">Membership:</span> {user.membership}
          </p>
          <p>
            <span className="font-bold">Join Date:</span> {user.joinDate}
          </p>
          {/* Add more user details as needed */}
        </div>
        <div className="md:w-3/4 mt-8 md:mt-0 md:pl-8">
          {/* Add additional sections or components for profile dashboard */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
