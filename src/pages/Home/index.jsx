import React from "react";
import HeroNew from "../../components/Hero";
import About from "../../components/About";
import WhyUs from "../../components/WhyUs";
import EduProgram from "../../components/EduProgram";
import Steps from "../../components/Steps";
import Gallery from "../../components/Gallery";
import Testimonials from "../../components/Testimonials";
import Faq from "../../components/Faq";
import EnquirySection from "../../components/EnquirySection";


function Home(){
    return(
        <>
        <HeroNew/>
        <About/>
        <WhyUs/>
        <EduProgram/>
        <Steps/>
        <Gallery/>
        <Testimonials/>
        <Faq/>
        <EnquirySection/>
        </>
    )
}

export default Home;
