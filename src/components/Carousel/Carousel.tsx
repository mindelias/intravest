import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";

import img1 from "../assets/Air Conditioner.png";
import img2 from "../assets/Dryer.png";
import img3 from "../assets/iPhone.png";
import img4 from "../assets/Video.png";
import img5 from "../assets/Laptop.png";
import img6 from "../assets/Portable1.png";
// import img1 from "../../assets/img5.jpg";
function Carousel() {
  // eslint-disable-next-line 
  const [respons, setRes] = useState({
    0: {
      items: 2,
      nav: false,
    },
    700: {
      items: 1,
    },

    1000: {
      items: 1,
    },
  });
  // setRes(respons);

  return (
    <div>
      <div className="container">
        <OwlCarousel
          items={1}
          rewind={true}
          className="owl-theme"
          center={true}
          autoWidth={true}
          loop={true}
          nav={true}
          responsiveClass={true}
          autoPlay={true}
          autoplayTimeout={1000}
          autoplaySpeed={true}
          autoplayHoverPause={false}
          responsive={respons}
        >
          <div>
            <img className="img" src={img6} alt='slider' />
          </div>

          <div>
            <img className="img" src={img2} alt='slider' />
          </div>

          <div>
            <img className="img" src={img3} alt='slider' />
          </div>

          <div>
            <img className="img" src={img4} alt='slider' />
          </div>

          <div>
            <img className="img" src={img5} alt='slider' />
          </div>

          <div>
            <img className="img" src={img6} alt='slider' />
          </div>

          <div>
            <img className="img" src={img1} alt='slider' />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
export default Carousel;
