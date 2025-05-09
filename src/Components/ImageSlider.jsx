import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style.css";

const ImageSlider = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 5, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    centerMode: true, // Enable center mode
    centerPadding: "0", // No padding around the center slide
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  const images = [
    "./Images/bn1.png",
    "./Images/bn2.png",
    "./Images/bn3.png",
    "./Images/bn4.png",
    "./Images/bn5.png",
    "./Images/bn2.png",
  ];

  return (
    <div className="slider-container">
      <div className="gradient-overlay">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "290px",
                  height: "450px",
                  borderRadius: "10px",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
