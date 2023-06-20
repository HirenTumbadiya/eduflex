import React from 'react';
import aboutImage from '../../asset/images/about.jpg'
import banner from '../../asset/images/aboutbanner.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutPage = () => {

  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      photo: aboutImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: aboutImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },{
      id: 3,
      name: 'Jane Smith',
      photo: aboutImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      name: 'Jane Smith',
      photo: aboutImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      name: 'Jane Smith',
      photo: aboutImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 7,
      name: 'seven name',
      photo: aboutImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 8,
      name: 'Jane Smith',
      photo: aboutImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 9,
      name: 'alter Smith',
      photo: aboutImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 10,
      name: 'lorem',
      photo: aboutImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 11,
      name: 'Jane Smith',
      photo: aboutImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className='mt-16'>
    <section className="relative flex h-60">
          <div
            className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
            style={{
              zIndex: '-1',
            }}
          />
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="About Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white">About Us</h1>
            <p className="text-xl text-center mb-8 text-white">Unlocking the potential of stock market trading</p>
          </div>
      </div>
        </section>
        
            <div className='m-20 mt-0'>
      <section className="bg-gray-100 shadow-md shadow-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 p-10">
              <img src={aboutImage} alt="About Us" className="w-full h-96 rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur libero ac sem tincidunt, a suscipit turpis tristique. 
                Sed sed metus at mauris laoreet dignissim ut vitae dui. Praesent blandit fringilla ultrices. Integer tincidunt est non justo rutrum, 
                id congue ligula scelerisque. Duis eu arcu id sapien pharetra commodo. Nam non faucibus lectus, nec commodo lectus. Nullam tincidunt 
                cursus rutrum. Sed vestibulum nisi vel ipsum interdum, sed tempus risus lobortis. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur libero ac sem tincidunt, a suscipit turpis tristique. 
            Sed sed metus at mauris laoreet dignissim ut vitae dui. Praesent blandit fringilla ultrices. Integer tincidunt est non justo rutrum, 
            id congue ligula scelerisque. Duis eu arcu id sapien pharetra commodo. Nam non faucibus lectus, nec commodo lectus. Nullam tincidunt 
            cursus rutrum. Sed vestibulum nisi vel ipsum interdum, sed tempus risus lobortis. 
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-12 shadow-md shadow-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur libero ac sem tincidunt, a suscipit turpis tristique. 
            Sed sed metus at mauris laoreet dignissim ut vitae dui. Praesent blandit fringilla ultrices. Integer tincidunt est non justo rutrum, 
            id congue ligula scelerisque. Duis eu arcu id sapien pharetra commodo. Nam non faucibus lectus, nec commodo lectus. Nullam tincidunt 
            cursus rutrum. Sed vestibulum nisi vel ipsum interdum, sed tempus risus lobortis. 
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur libero ac sem tincidunt, a suscipit turpis tristique. 
            Sed sed metus at mauris laoreet dignissim ut vitae dui.</p>
          {/* Add team members with photos and details */}
          <Slider {...sliderSettings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="p-10">
                <img src={member.photo} alt={member.name} className="rounded-lg shadow" />
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-description">{member.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="bg-gray-100 py-12 shadow-md shadow-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Mentors</h2>
          {/* Add mentors with photos and details */}
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/3 px-4 mb-8">
              <img src={aboutImage} alt="Mentor 1" className="w-full mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold">Mentor 1</h3>
              <p className="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img src={aboutImage} alt="Mentor 2" className="w-full mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold">Mentor 2</h3>
              <p className="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img src={aboutImage} alt="Mentor 2" className="w-full mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold">Mentor 2</h3>
              <p className="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Founder's Detail</h2>
          <div className="flex items-center">
            <img src={aboutImage} alt="Founder" className="w-32 h-32 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Founder Name</h3>
              <p className="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutPage;
