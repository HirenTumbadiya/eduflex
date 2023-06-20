import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FreeCoursesSlider = ({ courses }) => {
  if (!courses) {
    return null; // Return null or a loading state if the courses array is undefined
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-8">
      <div className="flex">
        <div className="w-1/4 pr-4">
        <p className="text-4xl font-bold mb-4 py-10">Browse our collection of free courses:</p>
        </div>
        <div className="w-3/4">
          <Slider {...sliderSettings}>
            {courses
              .filter((course) => course.type === 'free')
              .map((course) => (
                <div key={course.id} className="p-4">
                  <div className="border rounded-lg overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-gray-600">{course.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FreeCoursesSlider;
