// Finished.jsx
import React from 'react';
import finishedImage1 from '../assets/finished1.jpg';
import finishedImage2 from '../assets/finished2.jpg';
import finishedImage3 from '../assets/finished3.jpg';
import finishedImage4 from '../assets/finished4.jpg';
import finishedImage5 from '../assets/finished5.jpg';
import finishedImage6 from '../assets/finished6.jpg';
import finishedImage7 from '../assets/finished7.jpg';
import finishedImage8 from '../assets/finished8.jpg';

const Finished = () => {
  // Array of image sources
  const imageSources = [
    finishedImage1,
    finishedImage2,
    finishedImage3,
    finishedImage4,
    finishedImage5,
    finishedImage6,
    finishedImage7,
    finishedImage8,
  ];

  return (
    <div className="finished">
      <div className="image-grid">
        {imageSources.map((imageSrc, index) => (
          <img key={index} src={imageSrc} alt={`Finished Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Finished;
