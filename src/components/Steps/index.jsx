import React from "react";
import './style.css';
import { motion } from 'framer-motion';
import bee from '../../assets/decos/bee.png';

function Steps() {
  return (
    <div className="steps-main">
      <div className="inner-steps">
        <h4 className="steps-subheading">Steps</h4>
        <h2 className="steps-heading">A Smooth Process to Join Our Daycare Family</h2>
        <div className='divide'>
          <img src={bee} className='img-fluid divider-img float-down' alt="bee divider"/>
        </div>

        <div className="steps-container">
          {/* Step 1 */}
          <motion.div
            className="steps-box"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5, ease:'easeInOut' }}
          >
            <div className="steps-counter">
              <center>
                <div className="steps-count-main">
                  <h2 className="steps-count">1</h2>
                </div>
              </center>
              <div className="steps-content">
                <h4 className="steps-title">Schedule a Tour</h4>
                <p className="steps-para">
                  Visit Kiddie to explore our facilities, meet our staff, and learn more about our programs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="steps-box"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2, ease:"easeInOut" }}
          >
            <div className="steps-counter">
              <center>
                <div className="steps-count-main">
                  <h2 className="steps-count">2</h2>
                </div>
              </center>
              <div className="steps-content">
                <h4 className="steps-title">Complete the Application</h4>
                <p className="steps-para">
                  Fill out our enrollment form with key details about your child’s needs, and schedule.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="steps-box"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.4, ease:"easeInOut" }}
          >
            <div className="steps-counter">
              <center>
                <div className="steps-count-main">
                  <h2 className="steps-count">3</h2>
                </div>
              </center>
              <div className="steps-content">
                <h4 className="steps-title">Finalize the Enrollment</h4>
                <p className="steps-para">
                  Meet with our team to finalize the details & set the start date for your child’s journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
