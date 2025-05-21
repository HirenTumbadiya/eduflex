import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-gray-800 text-xl mb-2">
          <i className={`${icon} mr-2`}></i>
          {title}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
