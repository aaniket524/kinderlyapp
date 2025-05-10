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
import Testimonails from "../../components/Testimonials/testimonails";
import { motion } from "framer-motion";

function Home(){
    return(
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}>

        <HeroNew/>
        <About/>
        <WhyUs/>
        <EduProgram/>
        <Steps/>
        <Gallery/>
        <Testimonails/>
        {/* <Testimonials/> */}
        <Faq/>
        <EnquirySection/>
        </motion.div>
    )
}

export default Home;
