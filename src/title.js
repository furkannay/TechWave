import React, { useState, useEffect, useMemo } from "react";

const Title = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);
  const delay = 100; // Karakter başına gecikme süresi
  const pauseDelay = 1000; // Her tam isimden sonra bekleme süresi

  const companyNames = useMemo(() => ["TechWave  ", "Create your own world...  "], []);

  useEffect(() => {
    let timeout;

    if (currentIndex < companyNames[currentCompanyIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + companyNames[currentCompanyIndex][currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else {
      timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
        setCurrentCompanyIndex((prevIndex) => (prevIndex + 1) % companyNames.length);
      }, pauseDelay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentCompanyIndex, delay, pauseDelay, companyNames]);

  return <h1>{currentText}</h1>;
};

export default Title;
