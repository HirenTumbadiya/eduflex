import React, { useEffect, useState } from 'react';
import image from "../../asset/images/aboutbanner.jpg"

const Workshops = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    // Fetch workshops data
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    try {
      // Simulating dummy data for workshops
      const dummyWorkshops = [
        {
          id: 1,
          title: 'Understanding Candlestick Patterns',
          description: 'Learn the basics of web development in this hands-on workshop.',
          status: 'upcoming',
          image: image,
        },
        {
          id: 2,
          title: 'Understanding Candlestick Patterns',
          description: 'Discover the principles of user interface and user experience design.',
          status: 'upcoming',
          image: image,
        },
        {
          id: 3,
          title: 'Understanding Candlestick Patterns',
          description: 'Explore the world of data science and machine learning.',
          status: 'past',
          image: image,
        },
        {
          id: 4,
          title: 'Understanding Candlestick Patterns',
          description: 'Learn to build mobile apps for iOS and Android.',
          status: 'past',
          image: image,
        },
      ];

      setWorkshops(dummyWorkshops);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mt-20">
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
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white">Workshops</h1>
          </div>
      </div>
        </section>

        <div className="m-20 mt-10">
      <section>
        <h2 className="text-xl font-bold mb-4">Upcoming Workshops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops
            .filter((workshop) => workshop.status === 'upcoming')
            .map((workshop) => (
              <div key={workshop.id} className="border p-4">
                <div className="h-40">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">{workshop.title}</h3>
                  <p className="text-gray-600">{workshop.description}</p>
                  {/* Add more workshop details as needed */}
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4">Past Workshops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops
            .filter((workshop) => workshop.status === 'past')
            .map((workshop) => (
              <div key={workshop.id} className="border p-4">
                <div className="h-40">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">{workshop.title}</h3>
                  <p className="text-gray-600">{workshop.description}</p>
                  {/* Add more workshop details as needed */}
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
    </div>
  );
};

export default Workshops;
