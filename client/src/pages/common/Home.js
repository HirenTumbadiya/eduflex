import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeatureCard from '../../components/common/FeatureCard';
import headerImage from '../../asset/images/header.jpg';
import workshopImage from '../../asset/images/8432.jpg';
import testimonialImage from '../../asset/images/about.jpg';
import articleImage from '../../asset/images/6240060.jpg';
import { Link } from 'react-router-dom';
import ContactSection from '../../components/common/ContactSection';

const Home = () => {

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  
  const upcomingWorkshops = [
    {
      id: 1,
      title: 'Stock Market Basics Workshop',
      date: 'June 25, 2023',
      location: 'Online',
      image: workshopImage,
    },
    {
      id: 2,
      title: 'Technical Analysis Masterclass',
      date: 'July 5, 2023',
      location: 'New York City',
      image: workshopImage,
    },
    {
      id: 3,
      title: 'Risk Management Strategies Workshop',
      date: 'July 15, 2023',
      location: 'London',
      image: workshopImage,
    },
  ];

  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Trader',
      comment: 'Eduflex has been instrumental in improving my trading skills. Highly recommended!',
      image: testimonialImage,
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Investor',
      comment: 'The workshops provided by Eduflex have helped me make better investment decisions. Thank you!',
      image: testimonialImage,
    },
  ];

  // Dummy data for latest articles
  const latestArticles = [
    {
      id: 1,
      title: 'Top 10 Trading Strategies for Beginners',
      date: 'June 10, 2023',
      author: 'John Doe',
      image: articleImage,
    },
    {
      id: 2,
      title: 'Understanding Candlestick Patterns',
      date: 'June 15, 2023',
      author: 'Jane Smith',
      image: articleImage,
    },
    {
      id: 3,
      title: 'Top 10 High value Stock',
      date: 'June 25, 2023',
      author: 'Jane Smith',
      image: articleImage,
    },
    {
      id: 4,
      title: 'Use of Scalping',
      date: 'June 30, 2023',
      author: 'Jane Smith',
      image: articleImage,
    },
  ];

  return (
    <div>
<header className="mt-16 relative">
  <div className="container flex items-center">
    <div className="w-full">
      <img src={headerImage} alt="Stock Market" className="w-full" />
    </div>
    <div className="absolute text-black m-10 bg-pink-500 bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 rounded-lg">
      <h1 className="text-5xl md:text-7xl font-bold">
        LEARN WITH <br />
        <span style={{ textShadow: `2px 2px 4px rgba(0, 0, 0, 0.5)` }} className="text-7xl">
          EDUFLEX
        </span>
      </h1>
      <p className="text-gray-800 mt-2">
        Unlock the secrets of successful trading and elevate your investment decisions.
      </p>
    </div>
  </div>
</header>


      <div className="m-5 md:m-20 mt-0">
        <section className="py-12">
          <div className="">
            <div className="md:flex md:justify-between mx-10 shadow-xl">
              <FeatureCard
                title="Beginner's Guide"
                description="Learn the basics of stock market trading, from terminology to investment strategies."
                icon="fas fa-book"
              />
              <FeatureCard
                title="Advanced Techniques"
                description="Dive deeper into advanced trading techniques like technical analysis and risk management."
                icon="fas fa-chart-line"
              />
              <FeatureCard
                title="Expert Advice"
                description="Get insights from experienced traders and industry experts to enhance your trading skills."
                icon="fas fa-users"
              />
            </div>
          </div>
        </section>
        <section className="py-8 bg-gray-100 shadow shadow-black">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold flex justify-center">Upcoming Workshops</h2>
            <p className="text-gray-600 mt-2 flex justify-center">
              Join our upcoming workshops and gain hands-on experience in stock market trading.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {upcomingWorkshops.map((workshop) => (
                <div key={workshop.id} className="border p-4">
                  <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover mb-4" />
                  <h3 className="font-bold">{workshop.title}</h3>
                  <p>Date: {workshop.date}</p>
                  <p>Location: {workshop.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
  <div className="container mx-auto px-4">
    <h2 className="flex justify-center text-2xl md:text-4xl font-bold">Testimonials</h2>
    <div className="mt-8">
      <Slider {...testimonialSliderSettings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col items-center justify-center text-center p-8">
          <div key={testimonial.id} className="flex justify-center w-full">
            <img src={testimonial.image} alt={testimonial.name} className="w-48 h-48 rounded-full mb-4" />
          </div>
          <h3 className="text-lg font-bold">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>

<section className="py-12 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-4xl font-bold flex justify-center">Latest Articles</h2>
    <div className="md:flex md:justify-between">
      {latestArticles.map((article) => (
        <div key={article.id} className="border p-4 mt-8">
          <img src={article.image} alt={article.title} className="w-full h-48 object-cover mb-4" />
          <h3 className="font-bold">{article.title}</h3>
          <p>Date: {article.date}</p>
          <p>Author: {article.author}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
      <Link to={"/blog"} className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
        <span>Load More</span>
        <svg
          className="animate-bounce ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  </div>
</section>

<ContactSection />

      </div>
    </div>
  );
};

export default Home;
