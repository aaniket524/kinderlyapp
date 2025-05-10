import React from "react";
import './style.css'
import team1 from '../../assets/aboutus/team1.webp'
import team2 from '../../assets/aboutus/team2.webp'
import team3 from '../../assets/aboutus/team3.webp'
import team4 from '../../assets/aboutus/team4.webp'
import { motion } from "framer-motion";

function Team(){
    return(
        <>
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -30 }}
           transition={{ duration: 0.5 }}
        className="team-main"
        >
            <h4 className="team-subheading">
            Our Caregivers
            </h4>
            <h2 className="team-heading">
            Our Dedicated Caregivers
            </h2>
            <p className="team-para">
            At Kiddie Daycare, our highly experienced team of caregivers is passionate
             about providing the best care for your children.
            </p>
        <div className="team-card-container">
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: 30 }}
           transition={{ duration: 0.5, ease:'easeInOut' }}
        className="team-cards">
            <div className="team-imagepart">
                <img src={team4}
                className="img-fluid team-image"/>
            </div>
            <div className="team-contentpart">
                <h4 className="team-subtitle">
                Lead Caregiver
                </h4>
                <h2 className="team-title">
                David Brook 
                {/* <span> ~  Lead Caregiver </span> */}
                </h2>
                <p className="team-desc">
                David brings over 15 years of experience in early childhood education 
                and is committed to nurturing a love for learning in every child.
                </p>
            </div>
            
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, x: 30 }}
         whileInView={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -30 }}
         transition={{ duration: 0.5, ease:'easeInOut' }}
        className="team-cards">
            <div className="team-imagepart">
                <img src={team1}
                className="img-fluid team-image"/>
            </div>
            <div className="team-contentpart">
                <h4 className="team-subtitle">
                Lead Caregiver
                </h4>
                <h2 className="team-title">
                David Brook
                </h2>
                <p className="team-desc">
                David brings over 15 years of experience in early childhood education 
                and is committed to nurturing a love for learning in every child.
                </p>
            </div>
            
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, x: -30 }}
         whileInView={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 30 }}
         transition={{ duration: 0.5,ease:'easeInOut' }}
        className="team-cards">
            <div className="team-imagepart">
                <img src={team2}
                className="img-fluid team-image"/>
            </div>
            <div className="team-contentpart">
                <h4 className="team-subtitle">
                Lead Caregiver
                </h4>
                <h2 className="team-title">
                David Brook
                </h2>
                <p className="team-desc">
                David brings over 15 years of experience in early childhood education 
                and is committed to nurturing a love for learning in every child.
                </p>
            </div>
            
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, x: 30 }}
         whileInView={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -30 }}
         transition={{ duration: 0.5,ease:'easeInOut' }}className="team-cards">
            <div className="team-imagepart">
                <img src={team3}
                className="img-fluid team-image"/>
            </div>
            <div className="team-contentpart">
                <h4 className="team-subtitle">
                Lead Caregiver
                </h4>
                <h2 className="team-title">
                David Brook
                </h2>
                <p className="team-desc">
                David brings over 15 years of experience in early childhood education 
                and is committed to nurturing a love for learning in every child.
                </p>
            </div>
            
        </motion.div>
        </div>
        </motion.div>
        </>
    )
}

export default Team