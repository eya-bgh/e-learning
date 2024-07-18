import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import course1 from '../assets/course1.png';
import certif from '../assets/certification.jpeg';

const Certificates = () => {
    const [activeSlide, setActiveSlide] = useState(0); // State to track active slide

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
                containerElement.removeEventListener('mousemove', handleMouseMove); // Clean up event listener
            }
        };
    }, []);

    return (
        <div>
            <div className="container mx-auto px-4 py-8 relative">
                <div className="font-caprasimo text-5xl pl-16 leading-10 font-normal mb-8">
                    Certificates
                </div>

                <div ref={containerRef} className="relative" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                    <Slider ref={sliderRef} {...settings}>
                        {certificates.map((certificate) => (
                            <div key={certificate.id} className="px-1">
                                <div className="bg-white p-4 w-[370px] h-[420px] flex flex-col justify-between">
                                    <img src={certificate.image} alt={certificate.title} className="h-65 w-full object-cover mb-4" />
                                    <div className="flex flex-col flex-grow">
                                        <div className="flex-grow">
                                            <h2 className="font-oleo text-xl text-[#171717B8] text-center">{certificate.title}</h2>
                                        </div>
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

export default Certificates;
