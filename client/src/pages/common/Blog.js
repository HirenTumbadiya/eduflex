import React from 'react';
import BlogCard from '../../components/common/BlogCard';

const Blog = () => {

  const blogs = [
    {
      id: 1,
      title: 'Introduction to Stock Market Investing',
      description: 'Learn the basics of stock market investing and how to get started on your investment journey.',
      author: 'John Doe',
      date: 'June 10, 2023',
    },
    {
      id: 2,
      title: '10 Trading Strategies for Success',
      description: 'Discover 10 effective trading strategies that can help you achieve success in the stock market.',
      author: 'Jane Smith',
      date: 'June 15, 2023',
    },
    {
      id: 3,
      title: 'Understanding Technical Analysis',
      description: 'Gain a comprehensive understanding of technical analysis and its importance in stock market trading.',
      author: 'David Johnson',
      date: 'June 20, 2023',
    },
  ];

  return (
    <div className="mt-16">
          <section className="relative flex h-60">
          <div
            className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
            style={{
              zIndex: '-1',
            }}
          />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white">Blog/Articles</h1>
          </div>
      </div>
        </section>
      <div className="m-5 md:m-20 mt-0">
      {/* Search Bar */}
      {/* <section className="py-6 bg-gray-100 shadow-sm shadow-black">
        <div className="container mx-auto px-4">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full md:w-1/2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>       */}
      {/* Latest Blog */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Latest Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            author={blog.author}
            date={blog.date}
          />
        ))}
      </div>
        </div>
      </section>

      {/* All Blogs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">All Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            author={blog.author}
            date={blog.date}
          />
        ))}
      </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Blog;
