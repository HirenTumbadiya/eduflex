import React from 'react';

const BlogCard = ({ title, description, author, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <p className="text-gray-500">{`By ${author}`}</p>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
