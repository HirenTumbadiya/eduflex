import React from 'react';

const CoursesCard = ({ title, description, duration }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <p className="text-gray-500">{duration}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CoursesCard;