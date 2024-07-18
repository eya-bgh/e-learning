import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from '../assets/profile.png';
import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import certif from  '../assets/certification.jpeg'
import Rating from '../components/Rating';
import PopularCourses from '../components/PopularCourses';
import Wishlist from '../components/Wishlist';
import Button from '../components/Button.js'
import Certificates from '../components/Certificates.js'
import Progress from '../components/Progress.js'



const Profile = () => {
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide



  const profiles = [
    {
      id: 1,
      title: 'Introduction to Web Development 101',
      subtitle: 'Jane Doe',
      image: profile,
    }];
  // Define cards array for Slider
  const cards = [
    {
      id: 1,
      title: 'Introduction to Web Development 101',
      subtitle: 'Jane Doe',
      image: course1,
    },
    {
      id: 2,
      title: 'Introduction to Web Development 101',
      subtitle: 'Jane Doe',
      image: course1,
    },
    
  ];

  


  const certificates = [
    {
      id: 1,
      title: 'Received on 16-06-2023',
      image: certif,
    },
    {
      id: 2,
      title: 'Received on 16-06-2023',
      image: certif,
    },
    {
      id: 3,
      title: 'Received on 16-06-2023',
      image: certif,
    },
  ];

  // Settings for react-slick Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '70px',
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    afterChange: (index) => {
      setActiveSlide(index); // Update activeSlide state after slide change
    }
  };

  const containerRef = useRef(null); // Reference to container element
  const sliderRef = useRef(null); // Reference to Slider component

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || !sliderRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const offset = e.clientX - rect.left;

      if (offset > rect.width * 0.8) {
        sliderRef.current.slickNext(); // Slide to next slide when mouse moves to right 20% of container
      } else if (offset < rect.width * 0.2) {
        sliderRef.current.slickPrev(); // Slide to previous slide when mouse moves to left 20% of container
      }
    };

    const containerElement = containerRef.current;

    if (containerElement) {
      containerElement.addEventListener('mousemove', handleMouseMove); // Add mousemove event listener
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('mousemove', handleMouseMove); // Remove event listener on cleanup
      }
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div>
        
      <div className="font-caprasimo text-4xl leading-[55.05px] font-normal ml-12 mt-10">
        Welcome back Moatez!
      </div>
      {profiles.map((profile) => (
        <div key={profile.id} className="flex justify-between items-center w-full h-[800px] ">
          <div className="flex justify-center items-center w-1/2 h-full">
            <div className="w-[390px] h-[650px] border flex flex-col justify-center items-center">
              <div className="relative w-52 h-52 mb-12 mt-4 items-center mx-auto">
                <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-1 translate-y-1 bg-[#FDEE6D] z-0"></span>
                <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                <img src={profile.image} alt={profile.name} className="relative z-20 h-full w-full object-cover rounded-full" />
              </div>
              <div className="flex justify-between items-center mt-6">
                    <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
                      <div className="h-1 bg-blue-500" style={{ width: '60%' }}></div>
                    </div></div>
              <input
        className="border border-grey px-4 shadow-shdInset max-lg:mb-4 mb-4 h-16 font-monteserrat text-[20px] focus:outline-none placeholder-gray-500 placeholder-opacity-50 w-[90%]"
        placeholder="Moatez Saii"
        type="text"
      />
      <input
        className="border border-grey px-4 shadow-shdInset max-lg:mb-4 mb-4 h-16 font-monteserrat text-[20px] focus:outline-none placeholder-gray-500 placeholder-opacity-50 w-[90%]"
        placeholder="Moatezsaii@gmail.com"
        type="text"
      />
      <input
        className="border border-grey px-4 shadow-shdInset max-lg:mb-4 mb-8 h-16 font-monteserrat text-[20px] focus:outline-none placeholder-gray-500 placeholder-opacity-50 w-[90%]"
        placeholder="+216 55 456 521"
        type="text"
      />
              <div className="flex justify-between items-center w-full">
              <button className="relative w-[90%] h-14 py-1 px-auto mx-auto border border-grey text-black font-semibold bg-white">
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#FDEE6D] z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20 font-caprasimo text-xl font-normal">Edit Account</span>
        </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-1/2 h-full pt-9">
            <div className="font-caprasimo text-4xl font-normal mt-28 mb-7">
              Badges
            </div>
            <div className="relative w-[350px] h-[350px] flex justify-center items-center rounded-full border border-black my-2">
              <div className="relative w-[270px] h-[270px] flex justify-center items-center rounded-full border border-black bg-blueBadge">
                <div className="font-caprasimo text-5xl text-white text-center">
                  Level <br /> 16
                </div>
              </div>
            </div>
            <div className="font-caprasimo text-4xl mb-4 text-[#2C3439] py-auto">
              Rank:005
            </div>
          </div>
        </div>
      ))}

      
<Progress/>

<Certificates/>

<Wishlist/>
                    <div className="flex justify-between items-center ml-12 mb-16 mt-24">
                        <button className="relative w-96 h-16 py-1 px-3 border border-black text-black font-semibold bg-white">
                          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#CF1F30] z-0"></span>
                          <span className="absolute inset-0 border border-black bg-white z-10"></span>
                          <span className="relative z-20 font-caprasimo text-2xl font-normal">LOG OUT</span>
                        </button>
                      </div>
    </div>
  );
};

export default Profile;
