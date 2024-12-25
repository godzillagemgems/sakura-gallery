import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import './Slideshow.css';
const importAll = (requireContext) => requireContext.keys().map(requireContext);

const Slideshow = () => {
    const settings ={
        dots :true,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className="slideshow-container">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
              </div>
            ))}
          </Slider>
        </div>
      );
};

export default Slideshow;