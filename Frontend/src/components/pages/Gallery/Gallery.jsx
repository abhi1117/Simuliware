import React, { useState } from "react";
import "./Gallery.css"; // Ensure this CSS file exists and is correctly styled
// Import your images
import firstImage from "./picture/1.jpg";
import secondImage from "./picture/2.jpg";
import thirdImage from "./picture/3.jpg";
import fourthImage from "./picture/4.jpg";
import fifthImage from "./picture/5.jpg";
import sixthImage from "./picture/6.jpg";
import seventhImage from "./picture/7.jpg";
import eighthImage from "./picture/8.jpg";

const images = [
  secondImage,
  thirdImage,
  fourthImage,
  sixthImage,
  firstImage,
  fifthImage,
  eighthImage,
  seventhImage,
];

const Gallery = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const openFullScreen = (index) => {
    setSelectedImgIndex(index);
  };

  const closeFullScreen = (event) => {
    // Check if the click occurred outside the modal content
    if (event.target.classList.contains("modal")) {
      setSelectedImgIndex(null); // Close the full-screen view
    }
  };

  const handlePrev = () => {
    setSelectedImgIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedImgIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        <span
          style={{
            background:
              "linear-gradient(to right,  #8E3FE9, #974EEB, #9E62E0, #A976E2)",
            backgroundClip: "text",
            color: "transparent",
            fontSize: "18px",
          }}
        >
          <div
            className="centered"
            style={{ color: "#E8309E", textAlign: "center", marginTop: "0px" }}
          >
            <h4 style={{ fontSize: "18px" }}>
              <span style={{ color: "#8630E8" }}>GALL</span>ERY
            </h4>
          </div>
        </span>
      </h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openFullScreen(index)}
          >
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedImgIndex !== null && (
        <div className="modal" onClick={closeFullScreen}>
          <span className="close" onClick={() => setSelectedImgIndex(null)}>
            &times;
          </span>
          <span className="prev" onClick={handlePrev}>
            &#10094;
          </span>
          <img
            src={images[selectedImgIndex]}
            alt="Selected"
            className="modal-content"
          />
          <span className="next" onClick={handleNext}>
            &#10095;
          </span>
          <div className="thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={index === selectedImgIndex ? "active" : ""}
                onClick={() => setSelectedImgIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
