// ImageSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed (in milliseconds)
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="image1.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="image2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="image3.jpg" alt="Slide 3" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageSlider;
