import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import course1 from '../assets/course1.png';

const Progress = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  // Define your cards data
  const cards = [
    {
      id: 1,
      title: 'Introduction to Web Development 101',
      subtitle: 'Jane Doe',
      image: course1,
      progress: 75 // Percentage of progress
    },
    {
      id: 2,
      title: 'Introduction to Web Development 101',
      subtitle: 'Jane Doe',
      image: course1,
      progress: 50 // Percentage of progress
    }
  ];

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
      setActiveSlide(index);
    }
  };

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
        containerElement.removeEventListener('mousemove', handleMouseMove); // Clean up event listener
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="font-caprasimo text-5xl pl-16 leading-10 font-normal mb-8">
        Your Progress
      </div>
      
      <div ref={containerRef} className="relative" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-1">
              <div className="bg-white p-4 w-[370px] h-[450px] flex flex-col justify-between">
                <div className="relative">
                  <img src={card.image} alt={card.title} className="h-40 w-full object-cover mb-4" />
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="relative -top-4 w-full h-3 bg-gray-200 bg-opacity-30">
                      <div className="absolute -top-0 h-full bg-[#A19EF780] bg-opacity-30" style={{ width: `${card.progress}%` }}></div>
                    </div>
                    <span className="absolute right-0  font-bright -top-12 text-white text-3xl">{card.progress}%</span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow mt-4">
                  <h2 className="font-semibold text-xl">{card.title}</h2>
                  <h3 className="text-md text-gray-500">{card.subtitle}</h3>
                  <div className="flex justify-between items-center mt-6">
                    <button className="relative w-34 h-12 py-1 px-3 border border-black text-black font-semibold bg-white">
                      <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
                      <span className="absolute inset-0 border border-black bg-white z-10"></span>
                      <span className="relative z-20 font-caprasimo text-2xl font-normal">Continue</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Progress;
