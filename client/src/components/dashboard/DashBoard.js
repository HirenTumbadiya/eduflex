import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const currentHour = new Date().getHours();
  let greeting = '';

  if (currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  useEffect(() => {
    // Fetch user data
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('User ID not found in localStorage');
        return;
      }
  
      const response = await fetch(`http://localhost:8000/api/users/${userId}`);
  
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="main-content p-4">
        <h1 className="text-3xl font-bold mb-4">
          {greeting}, {user && user.user.name}!
        </h1>
        <h2 className="text-xl font-semibold mb-2">Welcome to your Dashboard</h2>
        <p>Here, you can access various features and manage your account.</p>
        
        {user && user.courses && user.courses.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mt-6 mb-4">Your Purchased Courses</h2>
            <div className="purchased-courses">
              {user.courses.slice(0, 3).map((course) => (
                <div className="course-card" key={course._id}>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  {/* Add more course details here */}
                </div>
              ))}
            </div>
            <a href="/dashboard/courses" className="more-courses-link">
              See More Courses
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
