import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../../assets/slider-images/img1.jpg';
import img2 from '../../../assets/slider-images/img2.jpg';
import img3 from '../../../assets/slider-images/img3.jpg';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      image: img1,
      alt: 'Slide 1',
    },
    {
      image: img2,
      alt: 'Slide 2',
    },
    {
      image: img3,
      alt: 'Slide 3',
    },
  ];

  return (
    <div className="slider-container w-10/12 md:w-1/2 mx-auto mb-16">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={slide.alt} 
            className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
