"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WideImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  return (
    <div className="">
      <Slider {...settings} style={{ width: "100%", height: "500px" }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-[400px] h-[500px] p-2 object-cover rounded-[20px]"
          />
        ))}
      </Slider>

      <style jsx global>{`
        .slick-dots {
          top: 510px;
          right: 10px;
          transform: none;
        }
        .slick-dots li {
          margin-right: 1px;
        }
        .slick-dots li button:before {
          font-size: 9px;
          color: white;
        }
        .slick-dots li.slick-active button:before {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default WideImageSlider;
