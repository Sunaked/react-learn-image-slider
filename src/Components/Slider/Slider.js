import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";

function getJpgs(photoID) {
  const EnvPublicURL = process.env.PUBLIC_URL;
  const jpgsPhotos = [
    EnvPublicURL + "/Imgs/img1.jpg",
    EnvPublicURL + "/Imgs/img2.jpg",
    EnvPublicURL + "/Imgs/img3.jpg",
    EnvPublicURL + "/Imgs/img4.jpg",
  ];
  return jpgsPhotos;
}
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    if (currentSlide !== getJpgs().length) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide === getJpgs().length) {
      setCurrentSlide(1);
    }
  };

  const prevSlide = () => {
    if (currentSlide !== 1) {
      setCurrentSlide(currentSlide - 1);
    } else if (currentSlide === 1) {
      setCurrentSlide(getJpgs().length);
    }
  };

  const moveDot = (index) => {
    setCurrentSlide(index);
  };

  const slideClassName = (currentIndex) => {
    console.log("currentIndex=" + currentIndex);
    console.log("currentSlide=" + currentSlide);
    if (currentSlide === currentIndex + 1) {
      //current active slide
      return "slide current";
    } else if (currentSlide - currentIndex === 0) {
      return "slide next-slide";
    } else if (currentSlide - currentIndex === 2) {
      return "slide previous";
    } else {
      return "slide other";
    }
  };
  return (
    <div className="container-slider">
      {getJpgs().map((obj, index) => {
        return (
          <div key={index} className={slideClassName(index)}>
            <img src={obj} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {getJpgs().map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={currentSlide === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
