'use client'

import React from 'react';
import Header from '../app/components/Header/index';
import Section1 from './pages/Section1';
import CardsSection from './pages/CardsSection';
import ServicesSection from './pages/ServicesSection';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <ServicesSection />
      <CardsSection />
    </div>
  );
};

export default Home;
