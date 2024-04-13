'use client'

import React from 'react';
import Header from '../app/components/Header/index';
import Section1 from './pages/Section1';
import CardsSection from './pages/CardsSection';
import ServicesSection from './pages/ServicesSection';
import Formulario from './pages/Form';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <ServicesSection />
      <CardsSection />
      <Formulario />
    </div>
  );
};

export default Home;
