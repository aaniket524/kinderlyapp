import React from "react";
import AboutGrid from "../../components/AboutGrid";
import { motion } from "framer-motion";

import Mission from "../../components/Mission";
import CoreValue from "../../components/CoreValue";
import Team from "../../components/Team";
import EnquirySection from "../../components/EnquirySection";
import Testimonials from "../../components/Testimonials";
import OurClasses from "../../components/OurClasses";
import Counts from "../../components/Counts";
import AllPageHeader from "../../layout/AllPageHeader";

function AboutPage(){
    return(<motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}>

    <AllPageHeader title="About Us" />
    <AboutGrid/>
    <Counts/>
    <CoreValue/>
      
    <Mission/>
    <OurClasses/>
 


    <Team/>
    <EnquirySection/>
    </motion.div>
    )
}

export default AboutPage;