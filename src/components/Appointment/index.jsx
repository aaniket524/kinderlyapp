import React from "react";
import './style.css'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Appointment(){
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/contact-us')
    }
    return(
        <>
        <div className="appointment">
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        exit={{ opacity: 0, y: -40 }}
        className="contactus-containers">
                  <div className="contactus">
                       {/* <h4 className="contactus-subtitle">
                           Contact Us
                       </h4> */}
                       <h2 className="contactus-title">
                       Book a Tour
                       </h2>
                       <p className="contactus-para">
                       Questions or special inquiries? Fill out a form and we’ll be in touch as soon as possible.
                       </p>
                       <div className="contactus-lists">
                        <ul>
                            <li>
                            The teacher is introduced
                            </li>
                            <li>The current level of knowledge is determined
                            </li>
                            <li>
                            An educational program is selected
                            </li>
                        </ul>
                       </div>
                       <div className="contactus-btn">
                           <button className="contactus-button" onClick={handleClick}>
                               Contact Us
                           </button>
                       </div>
                       {/* <img src={contactimg}
                       className="any-question img-fluid"/> */}
                       {/*  */}
                   </div>
                   <div className="contactus-forms">
                       <h4 className="contact-us-title">
                       Schedule Now
                       </h4>
                       <form>
                           <div className="contactus-form-detail">
                               <input placeholder="Your Name" type='text'/>
                           </div>
                           <div className="contactus-form-detail">
                               <input placeholder="Your Email" type='email'/>
                           </div>
                           <div className="contactus-form-detail">
                               <input placeholder="Phone Number" type='number'/>
                           </div>
                           <div className="contactus-form-detail">
                               <input placeholder="" type='date' required/>
                           </div>

                           <div className="contactus-form-detail">
                       <textarea placeholder="Your Message" type='text'/>
                   </div>
                        
                           <div className="contactus-submit">
                               <button className="submit-btn">Book a Tour</button>
                           </div>
                       </form>
                   </div>
                  </motion.div>
        </div>
        </>
    )
}
export default Appointment