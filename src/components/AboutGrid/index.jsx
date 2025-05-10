import React from "react";
import './style.css'
import Testimonials from "../Testimonials";
import team from '../../assets/aboutus/team.webp'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function AboutGrid(){
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/contact-us')
    }
    return(<>
    <div className="aboutgrid-main">
        <div className="aboutgrid-container1">
            <div className="aboutgrid1">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.1 } }}
                  whileHover={{ scale: 1.05 }}
                src={team}
                className="aboutgrid-image img-fluid"/>
            </div>
            <motion.div 
            className="aboutgrid2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                >
                <div className="aboutgrid-content">
                <h4 className="aboutgrid-subheading">
                    About Us
                    </h4>
                    <h4 className="aboutgrid-heading">
                    Welcome To Little Kinderly
                    </h4>
                    <p className="aboutgridpara">
                    Look into the eyes of a young child and see the sparkle and wonder.
                     Develop these passions and watch the adult bloom into someone special. 
                     At Kinderly Center, we work every day to build the foundations for amazing futures.
                     <br/>

                    </p>
                    <p  className="aboutgridpara">
                    At Kinderly Daycare, we are deeply passionate about everything we do. Our commitment to providing exceptional care is reflected in our attention to every child’s unique needs, fostering an environment where learning, creativity, and emotional development thrive.

                    </p>
                    <p className="aboutgridpara">
                    Our team’s dedication ensures each child feels supported, valued, and inspired to explore the world around them with curiosity and confidence.

                    </p>

                    <button className="aboutpage-btn" onClick= {handleClick}>
                        Contact Us
                    </button>
                </div>
            </motion.div>
        </div>

        {/* // counter */}
      
        
    </div>
   
    </>)
}

export default AboutGrid