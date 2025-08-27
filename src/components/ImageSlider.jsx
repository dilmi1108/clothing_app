import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
import Button from './Button';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/2c/9e/8d/2c9e8d5a62d375160f45979eb65b0d1a.jpg",
      title: "Summer Collection 2024",
      subtitle: "Discover the latest trends in fashion",
      buttonText: "Shop Women",
      link: "/women"  // Fixed: lowercase and no capital
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Men's Premium Line",
      subtitle: "Sophisticated style for the modern gentleman",
      buttonText: "Shop Men",
      link: "/men"  // Fixed: lowercase and no capital
    },
    {
      id: 3,
      image: "https://i.pinimg.com/1200x/79/0c/3c/790c3cf681d555d5759f410a578b7399.jpg",
      title: "Kids Adventure Wear",
      subtitle: "Comfortable and fun clothing for little explorers",
      buttonText: "Shop Kids",
      link: "/kids"  // Fixed: lowercase and no capital
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
                  {slide.subtitle}
                </p>
                <Link to={slide.link}>
                  <Button size="lg" className="transform hover:scale-105 transition-transform duration-200">
                    {slide.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;