import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './layout/navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About'
import Steps from './components/Steps'
import WhyUs from './components/WhyUs'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import EduProgram from './components/EduProgram'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import EnquirySection from './components/EnquirySection'
import Footer from './layout/Footer'
import HeroNew from './components/Hero'
import AboutPage from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AddmissionPage from './pages/AddmissionPage'
import ContactUsPage from './pages/ContactUsPage'
import ProgramsPage from './pages/ProgramsPage'
import GalleryPage from './pages/Gallery'

function App() {
  const lenisRef = useRef(); // create ref properly

  useEffect(() => {
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, []);

  return (
    <>
    <ReactLenis root >

    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about-us" element={<AboutPage/>} />
    <Route path="/contact-us" element={<ContactUsPage/>} />
    <Route path="/programs" element={<ProgramsPage/>} />
    <Route path="/gallery" element={<GalleryPage/>} />

    <Route path="/addmission" element={<AddmissionPage/>} />
    </Routes>
    {/* <HeroNew/> */}
    {/* <Hero/> */}
{/*     
    <About/>
    <WhyUs/>
   
    <EduProgram/>
    <Steps/>
    <Gallery/>
    <Testimonials/>
    <Faq/>
    <EnquirySection/> */}
   <Footer/>
    </ReactLenis>
  
    </>
  )
}

export default App
