import React, { useState, useEffect } from 'react';
import './Services.css';
import url1 from './images11.png';
import url2 from './images12.png';
import url3 from './images13.png';
import url4 from './images14.png';

const servicesData = [
  { id: 1, title: "Web Sitesi Tasarımı ve Geliştirme", description: "Müşterilerimize özelleştirilmiş, modern ve kullanıcı dostu web siteleri oluşturuyoruz. Tasarımlarımızda estetik ve işlevsellik bir araya gelerek, markaların dijital dünyada güçlü bir varlık olmalarını sağlıyoruz.", imageUrl: url1 },
  { id: 2, title: "Mobil Uygulama Geliştirme", description: "Mobil cihazlar için özel uygulamalar geliştirerek müşterilerimize geniş kitlelere erişim sağlamalarına yardımcı oluyoruz. Kullanıcı dostu arayüzler ve yüksek performanslı uygulamalarla mobil deneyimleri optimize ediyoruz.", imageUrl: url2 },
  { id: 3, title: "UI/UX Tasarımı", description: "Kullanıcı deneyimini ön planda tutarak, interaktif ve kullanıcı odaklı tasarımlar yapıyoruz. Markaların hedef kitlesini etkilemek ve dönüşümleri artırmak için görsel ve işlevsel çözümler üretiyoruz.", imageUrl: url3 },
  { id: 4, title: "Dijital Pazarlama Stratejileri", description: "Müşterilerimizin çevrimiçi varlıklarını güçlendirmek için kapsamlı dijital pazarlama stratejileri geliştiriyoruz. SEO, sosyal medya yönetimi, içerik pazarlaması ve reklam kampanyaları gibi alanlarda uzmanız.", imageUrl: url4 },
];

const Services = () => {
  const [cardsToShow, setCardsToShow] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setCardsToShow(1);
      } else {
        setCardsToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToIndex = (index) => {
    setStartIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
    }, 5000); // 5 saniyede bir geçiş yap
    return () => clearInterval(interval); // Bileşen unmounted olduğunda interval'ı temizle
  }, []);

  const getCardsToShow = () => {
    return Array.from({ length: cardsToShow }, (_, index) => (startIndex + index) % servicesData.length);
  };

  return (
    <div className="services-container">
      <div className="service-gallery">
        {getCardsToShow().map((index) => (
          <div key={servicesData[index].id} className="service-card">
            <img src={servicesData[index].imageUrl} alt={servicesData[index].title} />
            <h2>{servicesData[index].title}</h2>
            <h3>{servicesData[index].description}</h3>
          </div>
        ))}
      </div>
      <div className="dots-container">
        {servicesData.map((_, index) => (
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

export default Services;