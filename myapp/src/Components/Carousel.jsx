import React from "react";
import "./carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };

  

  return (
    <>
      <div className="carou">
        <Slider {...settings}>
          {props.details.map((d) => (
            <div>
              <img src={d.img} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
