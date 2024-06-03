import React from 'react';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="aboutus-container2">
      <div className="youtube-video-container">
      <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/TX9qSaGXFyg?controls=0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

        </div>
        <h2 className="section-title">About Innovatech VR Pro</h2>
        <p className="section-description">
        Step into the future of entertainment with the Innovatech VR Headset. With cutting-edge technology and immersive experiences, it's your gateway to limitless adventures.

Cutting-Edge Tech: Equipped with high-definition displays and advanced motion tracking, the Innovatech VR Headset brings virtual worlds to life with stunning realism.

Immersive Experiences: Explore distant galaxies, battle enemies, and embark on epic adventures, all from the comfort of your own home.

Comfortable Design: Lightweight and ergonomic, the Innovatech VR Headset offers hours of comfortable wear, allowing you to dive into virtual reality without discomfort.

Wide Compatibility: Compatible with smartphones and gaming consoles, the Innovatech VR Headset offers seamless connectivity and versatility.

Endless Possibilities: Whether gaming or exploring virtual worlds, the Innovatech VR Headset unlocks a universe of possibilities.

Elevate your entertainment experience with the Innovatech VR Headset and discover the extraordinary.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;