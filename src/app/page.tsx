'use client'

import React from 'react';
import Header from '../app/components/Header/index';
import Section1 from './pages/Section1';
import CardsSection from './pages/CardsSection';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <CardsSection />
    </div>
  );
};

export default Home;
