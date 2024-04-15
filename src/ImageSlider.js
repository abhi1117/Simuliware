import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
  };

  const sliderContainerStyle = {
    width: '30%', // Adjust the width as needed
    height: '5%',
    margin: '0 auto', // Center the slider horizontally
    position: 'relative', // Required for positioning the arrows
    marginBottom: '40px', // Margin bottom for the container
  
  };

  const imageStyle = {
    width: '100%', // Make sure all images take full width
    height: '400px', // Set the height of images, adjust as needed
    objectFit: 'cover', // Scale images to cover their container

  };

  const arrowsContainerStyle = {
    position: 'absolute',
    bottom: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '2',
  };

  return (
    <div style={sliderContainerStyle} className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} style={imageStyle} />
          </div>
        ))}
      </Slider>
      <div style={arrowsContainerStyle}>
    
      </div>
    </div>
  );
};

export default ImageSlider;
