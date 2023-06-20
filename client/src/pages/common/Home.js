import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeatureCard from '../../components/common/FeatureCard';
import headerImage from '../../asset/images/header.jpg';
import workshopImage from '../../asset/images/about.jpg';
import testimonialImage from '../../asset/images/about.jpg';
import articleImage from '../../asset/images/aboutbanner.jpg';

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
      title: 'Understanding Candlestick Patterns',
      date: 'June 15, 2023',
      author: 'Jane Smith',
      image: articleImage,
    },
    {
      id: 4,
      title: 'Understanding Candlestick Patterns',
      date: 'June 15, 2023',
      author: 'Jane Smith',
      image: articleImage,
    },
  ];

  return (
    <div>
      <header className="mt-16">
        <div className="container flex items-center">
          <div className="w-full">
            <img src={headerImage} alt="Stock Market" className="w-full" />
          </div>
          <div className="absolute text-black m-10">
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

      <div className="m-20 mt-0">
        <section className="py-12">
          <div className="">
            <div className="flex justify-between mx-10 shadow-xl">
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
            <div className='flex justify-between'>
            {latestArticles.map((article) => (
              <div key={article.id} className="border p-4 mt-8">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover mb-4" />
                <h3 className="font-bold">{article.title}</h3>
                <p>Date: {article.date}</p>
                <p>Author: {article.author}</p>
              </div>
            ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
