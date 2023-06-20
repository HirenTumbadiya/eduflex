import React from 'react';

const ToolCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <i className={`mr-2 ${icon}`} />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  );
};

export default ToolCard;
