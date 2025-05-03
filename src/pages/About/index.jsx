import React from "react";
import AboutGrid from "../../components/AboutGrid";
import Mission from "../../components/Mission";
import CoreValue from "../../components/CoreValue";
import Team from "../../components/Team";
import EnquirySection from "../../components/EnquirySection";
import Testimonials from "../../components/Testimonials";
import OurClasses from "../../components/OurClasses";
import Counts from "../../components/Counts";
import AllPageHeader from "../../layout/AllPageHeader";

function AboutPage(){
    return(<>
    <AllPageHeader title="About Us" />
    <AboutGrid/>
    <Counts/>
    <CoreValue/>
      
    <Mission/>
    <OurClasses/>
 


    <Team/>
    <EnquirySection/>
    </>)
}

export default AboutPage;