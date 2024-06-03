import React, { useState, useEffect } from 'react';
import './Slider.css';
import url1 from './images11.png';
import url2 from './images12.png';
import url3 from './images13.png';
import url4 from './images14.png';

const sliderData = [url1, url2, url3, url4];

const Imgslider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const goToNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const goToIndex = (index) => {
    setStartIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // 5 saniyede bir geçiş yap
    return () => clearInterval(interval); // Bileşen unmounted olduğunda interval'ı temizle
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-gallery">
        {sliderData.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`resim-${index}`}
            className={index === startIndex ? 'active' : ''}
          />
        ))}
      </div>
      <div className="dots-container">
        {sliderData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === startIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Imgslider;
