"use client";

import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../pages/Form';
import FirstSection from './pages/FirstSection';
import SolutionSection from './pages/SolutionsSection';
import ReasonSection from './pages/ReasonSection';

function SunoTech() {
    const [showHeader, setShowHeader] = useState(false)
    return (
        <>
            <div className={`${showHeader? '': 'hidden'} w-full h-full bg-black fixed z-40 opacity-50 xl:hidden`} onClick={() => setShowHeader(false)}></div>
            <Header setShowHeader={setShowHeader} showHeader={showHeader}/>
            <FirstSection />
            <SolutionSection />
            <ReasonSection />
            <Form />
            <Footer />
        </>
    )
}

export default SunoTech