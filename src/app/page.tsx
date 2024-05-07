'use client'

import React, { useState } from 'react';
import Header from '../app/components/Header/index';
import Section1 from './pages/Section1';
import CardsSection from './pages/CardsSection';
import ServicesSection from './pages/ServicesSection';
import Form from './pages/Form';
import Footer from './components/Footer';

const Home: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false)
  return (
    <div>
      <div className={`${showHeader? '': 'hidden'} w-full h-full bg-black fixed z-40 opacity-50 xl:hidden`} onClick={() => setShowHeader(false)}></div>
      <a href="https://wa.me/+551142106364"><img className="fixed right-[3%] bottom-[5%] z-30 w-20" src="WHATSAPP-ICON.png" alt="Icone Whastsapp"></img></a>
      <Header setShowHeader={setShowHeader} showHeader={showHeader} />
        <Section1 />
        <ServicesSection />
        <CardsSection />
        <Form />
      <Footer />
    </div>
  );
};

export default Home;
