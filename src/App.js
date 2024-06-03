// src/App.js

import React from 'react';
import './App.css';
import Header from './companyname';
import './PressStart2P-Regular.ttf';
import Services from './services';
import AboutUs from './aboutus';
import Footer from './footer';
import ContactUs from './contactus';
import OrderForm from './OrderForm';
import Slider from './Slider'; // Slider bileşenini import ediyoruz

function App() {
    return (
        <div className="app">
            <Header />
            <Slider /> {/* Slider bileşenini ekliyoruz */}
            <AboutUs />
            <Services />
            <OrderForm />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
