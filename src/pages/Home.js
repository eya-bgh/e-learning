import React, { useState } from 'react';
import CursorImage from '../assets/Cursor.png';
import girl from '../assets/girl.gif';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="relative w-12 h-12 cursor-pointer" onClick={onClick}>
  <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
  <span className="absolute inset-0 border border-black bg-white z-10"></span>
  <span className="relative z-20 font-caprasimo text-[20px] font-normal flex items-center justify-center">
    &gt;
  </span>
</div>

  );
}

function CardSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
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
      const slides = document.querySelectorAll('.slick-slide');
      slides.forEach((slide, i) => {
        slide.classList.remove('blurred'); 
        if (i === index + 2) { 
          slide.classList.add('blurred');
        }
      });
    }
  };

  const cards = [
    {
      id: 1,
      title: 'Introduction to web development 101',
      subtitle: 'Jane Doe',
      description: 'Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.',
      image: course1
    },
    {
      id: 2,
      title: 'Leadership, Team and project management',
      subtitle: 'Jhon Blake Doe',
      description: 'Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.',
      image: course2
    },
    {
      id: 3,
      title: 'Norse history, a brief about the lost ages',
      subtitle: 'Magnus Glare',
      description: 'Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.',
      image: course3
    },
    {
      id: 4,
      title: 'Norse history, a brief about the lost ages',
      subtitle: 'Magnus Glare',
      description: 'Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.',
      image: course3
    }
  ];

  return (
    <div className="container mx-auto px-12 py-8 relative">
      <div className="font-caprasimo text-[50px] leading-[55.05px] font-normal mb-8">
                        Popular courses
                    </div>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-2 ">
            <div className="bg-white p-6   w-96 h-[600px] ml-0">
              <img src={card.image} alt={card.title} className="h-40 w-full object-cover mb-4" />
              <div className="flex flex-col space-y-2">
                <div>
                  <h2 className="font-semibold text-2xl ">{card.title}</h2>
                  <h3 className="text-md text-gray-500">{card.subtitle}</h3>
                </div>
                <p className="text-gray-600">{card.description}</p>
                <div className="flex items-center justify-between mt-4">
                <button className="relative w-32 h-12 py-1 px-3 border border-black text-black font-semibold bg-white">
  <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
  <span className="absolute inset-0 border border-black bg-white z-10"></span>
  <span className="relative z-20 font-caprasimo text-[26px] font-normal">Enroll</span>
</button>


                  <div className="flex items-center ml-4">
                    {[...Array(5)].map((star, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.862 5.736h6.016c.969 0 1.372 1.24.588 1.81l-4.874 3.527 1.862 5.736c.3.922-.755 1.688-1.54 1.11L10 14.347l-4.874 3.527c-.784.578-1.838-.188-1.54-1.11l1.862-5.736L.574 10.473c-.784-.57-.381-1.81.588-1.81h6.016l1.871-5.736z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        ))}
      </Slider>
    </div>
  );

 
}

export default function Home() {
  return (
    <div>
      <div className="container bg-[#F5F4FF] flex flex-col md:flex-row mx-auto px-12 space-x-6 ">
        <div className="md:w-1/2 flex flex-col space-y-5 justify-center py-14 my-9">
          <div className="font-caprasimo text-5xl font-bold mb-4">
            <h1 className='mb-4'>Bright Future</h1> 
            <h1 className='mb-4'>starts with</h1>
            <h1 className='mb-4'>the right</h1>
            education
          </div>
          <div>
            <p className="font-montserrat text-lg mb-6">
              Online courses never easier to access with Bright,<br/>
              meeting the best pricing, best mentors and best <br/>
              planning to achieve your goals in the deadlines <br/>
              following your own schedule and time preferences!
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4">
          <button className="relative w-56 h-12 py-1 px-3 border border-black text-black font-semibold bg-white">
            <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
            <span className="absolute inset-0 border border-black bg-white z-10"></span>
            <span className="relative z-20 font-caprasimo text-[26px] font-normal">Sign Up now</span>
          </button>

            <div className="flex flex-col items-start mt-2">
              <img src={CursorImage} alt="cursor" className="w-13 ml-16"/>
              <button className="bg-[#A19EF7] text-white font-montserrat px-6 py-1 rounded-none mt-[-50px] ml-[121px]">
                Click!
              </button>
            </div>
          </div>
        </div>
        <div className="w-[630px] flex justify-center mb-[-40px] h-[408px] mt-52">
          <img src={girl} alt="Illustration" className="max-w-full h-auto"/>
        </div>
      </div>
      <div className="mt-8">
        <CardSlider />
      </div>
    </div>
  );
}
