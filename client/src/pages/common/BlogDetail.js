import React from 'react';
import { useParams } from 'react-router-dom';
import BlogCard from '../../components/common/BlogCard';

const BlogDetail = () => {
  const { id } = useParams();

  const blog = {
    id: 1,
    title: 'Introduction to Stock Market Investing',
    description: 'Learn the basics of stock market investing and how to get started on your investment journey.',
    author: 'John Doe',
    date: 'June 10, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat nunc. Aliquam eleifend odio non metus fringilla, in blandit lorem venenatis. Nulla id venenatis dolor. Suspendisse non est ipsum. Phasellus varius turpis ac elit vestibulum, eget tristique lectus tincidunt. Nam pulvinar, ligula eu dapibus porttitor, massa urna pulvinar odio, id semper nisi metus id ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tincidunt, dolor in viverra dignissim, orci tellus ullamcorper eros, at iaculis nulla ex id lorem. Mauris nec faucibus lectus. Nulla ut ex nec tellus pulvinar faucibus id ac lacus. Etiam tincidunt feugiat tellus, id condimentum elit gravida a. Vivamus scelerisque, elit et pulvinar consectetur, felis metus sagittis est, a fringilla diam elit ac purus.',
  };

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
    <div className="m-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-4">By {blog.author} | {blog.date}</p>
      <p className="text-gray-700 mb-8">{blog.description}</p>
      <div className="prose">
        <p>{blog.content}</p>
      </div>

      <div className='mt-5'>
      <h1 className='text-2xl md:text-4xl font-bold mb-4'>Related Blogs</h1>
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
    </div>
  );
};

export default BlogDetail;
