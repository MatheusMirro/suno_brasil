'use client'

import React from 'react';
import Header from '../app/components/Header/index';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Section1 />
      {/* <Section2 /> */}
    </div>
  );
};

export default Home;
