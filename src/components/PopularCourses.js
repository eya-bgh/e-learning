import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import Rating from './Rating';
import Button from '../components/Button';
const PopularCourses = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer"
        onClick={onClick}
      >
        <span className="relative w-12 h-12 flex items-center justify-center">
          <span className="absolute inset-0 w-12 h-12 border border-black transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
          <span className="absolute inset-0 w-12 h-12 border border-black bg-white z-10"></span>
          <span className="relative z-20 font-caprasimo text-[20px] font-normal flex items-center justify-center">
            &gt;
          </span>
        </span>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '70px',
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
      setActiveSlide(index);
    }
  };

  const cards = [
    {
      id: 1,
      title: 'Introduction to Web Development 101',
      subtitle: 'Jane Doe',
      description: 'Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.',
      image: course1,
      rate: 0 
    },
    {
      id: 2,
      title: 'Leadership, Team and Project Management',
      subtitle: 'John Blake Doe',
      description: 'Learn about leadership, team dynamics, and project management essentials with John Blake Doe.',
      image: course2,
      rate: 4.5
    },
    {
      id: 3,
      title: 'Norse History: A Brief about the Lost Ages',
      subtitle: 'Magnus Glare',
      description: 'Explore the mysteries of Norse history and delve into the lost ages with Magnus Glare.',
      image: course3,
      rate: 4
    },
    {
      id: 4,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course3,
      rate: 3 
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="font-caprasimo text-5xl pl-16 leading-10 font-normal mb-8">
        Popular Courses
      </div>
      
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={card.id} className="px-1">
            <div className={`bg-white p-4 w-[370px] h-[440px] flex flex-col justify-between ${index === activeSlide + 1 ? '' : ''}`}>
              <img src={card.image} alt={card.title} className="h-40 w-full object-cover mb-4" />
              <div className="flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="font-semibold text-xl">{card.title}</h2>
                  <h3 className="text-md text-gray-500">{card.subtitle}</h3>
                  <p className="text-gray-600 mt-2">{card.description}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                <Button  name={"Enroll"}  color={"purp"} width={"32"}/>
                  <div className="flex items-center ml-4">
                    <Rating rate={card.rate} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularCourses;

