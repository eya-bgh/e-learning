import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import Rating from './Rating';

const Wishlist = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  // Define your cards data
  const cards = [
    {
      id: 1,
      title: 'Leadership, Team and Project Management',
      subtitle: 'John Blake Doe',
      description: 'Learn about leadership, team dynamics, and project management essentials with John Blake Doe.',
      image: course2,
      rate: 4,
      price: '80.000'
    },
    {
      id: 2,
      title: 'Leadership, Team and Project Management',
      subtitle: 'John Blake Doe',
      description: 'Learn about leadership, team dynamics, and project management essentials with John Blake Doe.',
      image: course2,
      rate: 4,
      price: '80.000'
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
        Your Wishlist
      </div>
      
      <div
        ref={containerRef}
        className="relative"
        style={{ maxWidth: '100%', overflow: 'hidden' }}
      >
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, index) => (
            <div key={card.id} className={`px-1 ${index === activeSlide ? 'active' : ''}`}>
              <div className="bg-white p-4 w-[370px] h-[450px] flex flex-col justify-between">
                <img src={card.image} alt={card.title} className="h-40 w-full object-cover mb-4" />
                <div className="flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h2 className="font-semibold text-xl">{card.title}</h2>
                    <h3 className="text-md text-gray-500">{card.subtitle}</h3>
                    <p className="text-gray-600 mt-2">{card.description}</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="relative w-32 h-12 py-1 px-3 border border-black text-black font-semibold bg-white">
                      <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
                      <span className="absolute inset-0 border border-black bg-white z-10"></span>
                      <span className="relative z-20 font-caprasimo text-2xl font-normal">Enroll</span>
                    </button>
                    <div className="flex items-center ml-4 flex-col">
                      <p className='font-caprasimo text-gray-800 mt-2 text-2xl'>{card.price}DT</p>
                      <Rating rate={card.rate} />
                    </div>
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

export default Wishlist;
