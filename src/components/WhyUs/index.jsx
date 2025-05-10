import React from "react";
import './style.css';
import bee from '../../assets/decos/bee.png';
import why from '../../assets/why-us/whyus.png';
import why1 from '../../assets/why-us/why1.png';
import why2 from '../../assets/why-us/why2.png';
import why3 from '../../assets/why-us/why3.png';
import why4 from '../../assets/why-us/why4.png';
import { motion } from "framer-motion";

function WhyUs() {
  return (
    <>
      <div className="whyus">
        <h4 className='eduprogram-subheading'>Discover Our Strengths</h4>
        <h2 className='eduprogram-heading'>Why Choose Our Kindergarten?</h2>
        <div className='divide'>
          <img src={bee} className='img-fluid divider-img float-down' alt="divider" />
        </div>

        <div className="whyus-conatiner">
          {/* Left side */}
          <div className="whyusbox1">
            <motion.div
              className="whyusbox-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="whyus-box">
                <div className="whyus-content">
                  <div className="whyus-content-head">
                    <h4 className="whyus-title">Interactive Storytelling</h4>
                    <p className="whyus-para">
                      Interactive Storytelling allows children to engage with stories.
                    </p>
                  </div>
                </div>
                <div className="whyus-icon">
                  <img src={why1} className="img-fluid whyus-icons" alt="icon" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="whyusbox-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="whyus-box">
                <div className="whyus-content">
                  <div className="whyus-content-head">
                    <h4 className="whyus-title">Creative Expression Tools</h4>
                    <p className="whyus-para">
                      Interactive Storytelling allows children to engage with stories.
                    </p>
                  </div>
                </div>
                <div className="whyus-icon">
                  <img src={why2} className="img-fluid whyus-icons" alt="icon" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center image */}
          <motion.div
            className="whyusbox2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={why} className="whyus-center img-fluid" alt="center illustration" />
          </motion.div>

          {/* Right side */}
          <div className="whyusbox3">
            <motion.div
              className="whyusbox-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="whyus-box">
                <div className="whyus-content">
                  <div className="whyus-content-head">
                    <h4 className="whyus-title">Resource Library</h4>
                    <p className="whyus-para">
                      Interactive Storytelling allows children to engage with stories.
                    </p>
                  </div>
                </div>
                <div className="whyus-icon">
                  <img src={why4} className="img-fluid whyus-icons" alt="icon" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="whyusbox-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="whyus-box">
                <div className="whyus-content">
                  <div className="whyus-content-head">
                    <h4 className="whyus-title">Fun Quizzes and Games</h4>
                    <p className="whyus-para">
                      Interactive Storytelling allows children to engage with stories.
                    </p>
                  </div>
                </div>
                <div className="whyus-icon">
                  <img src={why3} className="img-fluid whyus-icons" alt="icon" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Background Icons */}
        <span className="bg-icon plant"></span>
        <span className="bg-icon bulb"></span>
        <span className="bg-icon smile"></span>
        <span className="bg-icon hearts"></span>
        <span className="bg-icon animal"></span>
      </div>
    </>
  );
}

export default WhyUs;
