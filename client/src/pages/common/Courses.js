import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FreeCoursesSlider from '../../components/common/FreeCoursesSlider';
import course from '../../asset/images/course.jpg'
const Courses = () => {
  const [courses, setCourses] = useState([]);

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

  useEffect(() => {
    // Fetch courses data
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/courses');
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error('Failed to fetch courses');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Dummy courses for showcase
  const dummyCourses = [
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Learn the basics of React.js',
      type: 'free',
      category: 'beginner',
      image: course,
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      description: 'Master advanced techniques in React.js',
      type: 'bootcamp',
      category: 'advanced',
      image: course,
    },
    {
      id: 3,
      title: 'Full Stack Web Development Bootcamp',
      description: 'Become a full stack developer with this intensive bootcamp',
      type: 'bootcamp',
      category: 'intermediate',
      image: course,
    },
    {
      id: 4,
      title: 'Data Science for Beginners',
      description: 'Introduction to data science concepts and tools',
      type: 'free',
      category: 'beginner',
      image: course,
    },
    {
      id: 5,
      title: 'Machine Learning Mastery',
      description: 'Advanced machine learning algorithms and applications',
      type: 'bootcamp',
      category: 'advanced',
      image: course,
    },
    {
      id: 6,
      title: 'Data Science for Beginners',
      description: 'Introduction to data science concepts and tools',
      type: 'free',
      category: 'beginner',
      image: course,
    },    
    {
      id: 7,
      title: 'Data Science for Beginners',
      description: 'Introduction to data science concepts and tools',
      type: 'free',
      category: 'beginner',
      image: course,
    },    
    {
      id: 8,
      title: 'Data Science for Beginners',
      description: 'Introduction to data science concepts and tools',
      type: 'free',
      category: 'beginner',
      image: course,
    },
    {
      id: 9,
      title: 'Full Stack Web Development Bootcamp',
      description: 'Become a full stack developer with this intensive bootcamp',
      type: 'free',
      category: 'intermediate',
      image: course,
    },    {
      id: 10,
      title: 'Full Stack Web Development Bootcamp',
      description: 'Become a full stack developer with this intensive bootcamp',
      type: 'free',
      category: 'intermediate',
      image: course,
    },    {
      id: 11,
      title: 'Full Stack Web Development Bootcamp',
      description: 'Become a full stack developer with this intensive bootcamp',
      type: 'free',
      category: 'intermediate',
      image: course,
    },
    {
      id: 12,
      title: 'Machine Learning Mastery',
      description: 'Advanced machine learning algorithms and applications',
      type: 'free',
      category: 'advanced',
      image: course,
    },    {
      id: 13,
      title: 'Machine Learning Mastery',
      description: 'Advanced machine learning algorithms and applications',
      type: 'free',
      category: 'advanced',
      image: course,
    },
  ];
  const allCourses = [...dummyCourses, ...courses];

  return (
    <div className='mt-16'>
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
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white">EDUFLEX all Courses</h1>
          </div>
      </div>
        </section>

        <div className="m-5 md:m-20 mt-0">
      <section>
        <FreeCoursesSlider courses={allCourses} />
      </section>

      <section className="mt-10 w-full">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="px-4 py-12">
              <div className="flex items-center justify-center">
                <div className="text-white text-center">
                  <h2 className="text-4xl font-bold mb-4">Bootcamp Courses</h2>
                  <p className="text-xl mb-4">Master advanced techniques in our intensive bootcamp programs.</p>
          <div className="mt-10 mb-5">
            {/* <Slider {...sliderSettings}> */}
              <div className="p-4">
                <div className="border rounded-lg overflow-hidden">
                  <img src={course} alt="Bootcamp Banner" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Bootcamp Course Title</h3>
                    <p className="text-white">Master advanced techniques in our intensive bootcamp programs.</p>
                  </div>
                </div>
              </div>
            {/* </Slider> */}
          </div>
                  <a
                    href="/bootcamps"
                    className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                  >
                    View Bootcamps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className='mt-10'>
      <h2 className='flex justify-center text-center text-4xl font-bold mb-5'>Course Categories</h2>
        <div>
          
        <h3 className='flex text-xl md:text-4xl font-bold mb-5'>Beginner</h3>
        <Slider {...sliderSettings}>
            {allCourses
              .filter((course) => course.category === 'beginner')
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

        <div className='mt-5'>
        <h3 className='flex text-xl md:text-4xl font-bold mb-5'>Intermediate</h3>
        <Slider {...sliderSettings}>
            {allCourses
              .filter((course) => course.category === 'intermediate')
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

        <div className='mt-5'>
        <h3 className='flex text-xl md:text-4xl font-bold mb-5'>Advanced</h3>
        <Slider {...sliderSettings}>
            {allCourses
              .filter((course) => course.category === 'advanced')
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
      </section>
    </div>
    </div>
  );
};

export default Courses;
