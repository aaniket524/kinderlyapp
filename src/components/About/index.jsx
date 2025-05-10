import React from "react";
import './style.css';
import { motion } from "framer-motion";


function About (){
    return(
        <>
        <div className="about-main">
            <div className="about-container">
                <motion.div className="about-content"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
                exit={{ opacity: 0, x: 20, transition: { duration: 0.3 } }}
                >
                    <h4 className="about-us-subheading">
                    About Us
                    </h4>
                    <h2 className="about-us-heading">
                    Committed to Your Child's Growth and Happiness
                    </h2>
                    {/* <img src="https://kidscenter.bzotech.com/wp-content/uploads/2024/10/h2-bg-title.png" 
                    className="constant img-fluid"/> */}
                    <p className="about-us-para">
                    At Kiddie, we provide a safe, supportive, and joyful environment where children thrive. 
                    Our dedicated team is passionate about inspiring a love for learning and curiosity in every child.
                    
                    </p>
                    <div className="about-details">
                        <div className="about-detail-container">
                            <div className="detail-count">
                                <h2 className="detail-counter">
                                    10+
                                </h2>
                            </div>
                            <div className="detial-text">
                            <p className="detail-texts">
                            Years of proven experience on the child daycare.
                                </p>
                            </div>
                        </div>
                        <div className="about-detail-container">
                            <div className="detail-count">
                                <h2 className="detail-counter">
                                    200+
                                </h2>
                            </div>
                            <div className="detial-text">
                            <p className="detail-texts">
                            Happy families taking services from us.</p>
                            </div>
                        </div>
                        {/* <div className="about-detail-container">
                            <div className="detail-count">
                                <h2 className="detail-counter">
                                    100%
                                </h2>
                            </div>
                            <div className="detial-text">
                            <p className="detail-texts">
                            Child Safety.</p>
                            </div>
                        </div>
                        <div className="about-detail-container">
                            <div className="detail-count">
                                <h2 className="detail-counter">
                                    100%
                                </h2>
                            </div>
                            <div className="detial-text">
                            <p className="detail-texts">
                            Child Safety.</p>
                            </div>
                        </div> */}
                    </div>
                </motion.div>
                <motion.div className="about-images"
                
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                >
                    <div className="about-image-collage" >
                    <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.1 } }}
                    whileHover={{ scale: 1.05 }}
                    src="https://img.freepik.com/free-photo/young-kids-performing-play-theatre-stage-celebrate-world-theatre-day_23-2151163672.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    // "https://img.freepik.com/premium-vector/real-life-family-moments-vector-illustration-concepts_1253202-60998.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    className="img-fluid about-image-1"/>
                       <motion.img 
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.3 } }}
                       whileHover={{ scale: 1.05 }}
                       src="https://img.freepik.com/premium-photo/female-teacher-leading-kindergarten-classroom-activities-engaging-kindergarten-students-playful_483187-9342.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    className="img-fluid about-image-4"/>
                    </div>
                    <div className="about-image-collage" >
                    <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.3 } }}
                    whileHover={{ scale: 1.05 }}
                    src="https://img.freepik.com/free-photo/international-day-education-celebration_23-2150930970.jpg?t=st=1745739218~exp=1745742818~hmac=20c4bb413f17f4006d651550d9530a9123ca140b379d01be6ed42273594b30ca&w=740"
                    className="img-fluid about-image-2"/>
                     <motion.img 
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.3 } }}
                     whileHover={{ scale: 1.05 }}
                     src="https://img.freepik.com/free-photo/adorable-little-girl-with-glasses-getting-stressed-out_53876-63179.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    //  "https://img.freepik.com/free-photo/diverse-kids-reading-books_53876-146406.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    className="img-fluid about-image-3"/>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    )
}

export default About