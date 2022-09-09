import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sushi1 from "../Asset/carousel/Sushi1-removebg-preview.png";
import Sushi2 from "../Asset/carousel/Sushi2-removebg-preview.png";
import Sushi3 from "../Asset/carousel/Sushi3-removebg-preview.png";
import Sushi4 from "../Asset/carousel/Sushi4-removebg-preview.png";

import Maki1 from "../Asset/carousel/Maki1-removebg-preview.png";
import Maki2 from "../Asset/carousel/Maki2-removebg-preview.png";
import Maki3 from "../Asset/carousel/Maki3-removebg-preview.png";
import Maki4 from "../Asset/carousel/Maki4-removebg-preview.png";

import Other1 from "../Asset/carousel/Others1-removebg-preview.png";
import Other2 from "../Asset/carousel/Others2-removebg-preview.png";
import Other3 from "../Asset/carousel/Others3-removebg-preview.png";
import Other4 from "../Asset/carousel/Others4-removebg-preview.png";

import star from "../Asset/carousel/iconmonstr-star-filled-240.png";
import ARROW_left from "../Asset/carousel/iconmonstr-arrow-left-lined-240.png";
import ARROW_Right from "../Asset/carousel/iconmonstr-arrow-right-lined-240.png";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={ARROW_Right}
      alt="arrow_left"
      onClick={onClick}
      className={className}
      id="arrow"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (

 <img
      src={ARROW_left}
      alt="arrow_left"
      onClick={onClick}
      className={className}
      id="arrow"
    />
   
  );
}

export default function CenterMode(Props) {
  let All = [
    {
      img: Sushi1,
      title: "Original Sushi",
      star: "4.4",
      price: "$2",
    },
    { img: Maki1, title: "Original Maki", star: "4.5", price: "$2" },
    { img: Other1, title: "Dango Tengaku", star: "4.0", price: "$5" },
    { img: Sushi4, title: "Sponge Sushi", star: "4.9", price: "$3.5" },
  ];

  let Sushi = [
    {
      img: Sushi1,
      title: "Original Sushi",
      star: "4.4",
      price: "$2",
    },
    { img: Sushi2, title: "Saumon Sushi", star: "4.1", price: "$2.3" },
    { img: Sushi3, title: "Aumi Sushi", star: "4.0", price: "$2.4" },
    { img: Sushi4, title: "Sponge Sushi", star: "4.9", price: "$3.5" },
  ];

  let Maki = [
    { img: Maki1, title: "Original Maki", star: "4.5", price: "$3" },
    { img: Maki2, title: "Tamago Maki", star: "3.7", price: "$4.2" },
    { img: Maki3, title: "Rolout Maki", star: "4.9", price: "$6" },
    { img: Maki4, title: "Big Bento Maki", star: "4.8", price: "$7" },
  ];

  let Others = [
    { img: Other1, title: "Dango Tengaku", star: "4.0", price: "$5" },
    { img: Other2, title: "Ramen Miso", star: "3.8", price: "$3.3" },
    { img: Other3, title: "Shrimp X6", star: "4.1", price: "$4" },
    { img: Other4, title: "Sauce Mix", star: "3.4", price: "$5,5" },
  ];

  let [carousel, setcarousel] = useState(All);
  let [carouselnb, setcarouselnb] = useState(3);

  useEffect(() => {
    if (Props.carousel === "All") {
      setcarousel(All);
    }
    if (Props.carousel === "Sushi") {
      setcarousel(Sushi);
    }
    if (Props.carousel === "Maki") {
      setcarousel(Maki);
    }
    if (Props.carousel === "Others") {
      setcarousel(Others);
    }
  }, [Props.carousel]);

  const { height, width } = useWindowDimensions();
  useEffect(() => {
   if(width < 1300){
setcarouselnb(1);
   }
  },[]);





  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: carouselnb,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="Slider-mainContainer">
      <Slider {...settings}>
        <div className="Slider-card">
          <div className="Slider-card2">
            <div className="Slider-card21">
              <img className="Slider-card21img" src={carousel[0].img}></img>
            </div>

            <div className="Slider-card22">
              <p>{carousel[0].title}</p>
            </div>

            <div className="Slider-card23">
              <div className="Slider-card23div">
                <img className="Slider-card23img" src={star}></img>
                <p>{carousel[0].star}</p>
              </div>

              <p>{carousel[0].price}</p>
            </div>
          </div>
        </div>

        <div className="Slider-card">
          <div className="Slider-card2">
            <div className="Slider-card21">
              <img className="Slider-card21img" src={carousel[1].img}></img>
            </div>

            <div className="Slider-card22">
              <p>{carousel[1].title}</p>
            </div>

            <div className="Slider-card23">
              <div className="Slider-card23div">
                <img className="Slider-card23img" src={star}></img>
                <p>{carousel[1].star}</p>
              </div>

              <p>{carousel[1].price}</p>
            </div>
          </div>
        </div>

        <div className="Slider-card">
          <div className="Slider-card2">
            <div className="Slider-card21">
              <img className="Slider-card21img" src={carousel[2].img}></img>
            </div>

            <div className="Slider-card22">
              <p>{carousel[2].title}</p>
            </div>

            <div className="Slider-card23">
              <div className="Slider-card23div">
                <img className="Slider-card23img" src={star}></img>
                <p>{carousel[2].star}</p>
              </div>

              <p>{carousel[2].price}</p>
            </div>
          </div>
        </div>

        <div className="Slider-card">
          <div className="Slider-card2">
            <div className="Slider-card21">
              <img className="Slider-card21img" src={carousel[3].img}></img>
            </div>

            <div className="Slider-card22">
              <p>{carousel[3].title}</p>
            </div>

            <div className="Slider-card23">
              <div className="Slider-card23div">
                <img className="Slider-card23img" src={star}></img>
                <p>{carousel[3].star}</p>
              </div>

              <p>{carousel[3].price}</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
