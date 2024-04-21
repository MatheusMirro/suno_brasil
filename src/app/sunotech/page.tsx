"use client";

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../pages/Form';
import FirstSection from './pages/FirstSection';
import SolutionSection from './pages/SolutionsSection';
import ReasonSection from './pages/ReasonSection';

function SunoTech() {
    return (
        <>
            <Header />
            <FirstSection />
            <SolutionSection />
            <ReasonSection />
            <Form />
            <Footer />
        </>
    )
}

export default SunoTech