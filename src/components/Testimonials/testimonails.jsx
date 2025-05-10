import React from "react";
import './testimonials.css';
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <div className="main-tesitmonials">
      <div className="testimonials-main">
        <h4 className="testimonials-subheading">Testimonials</h4>
        <h2 className="testimonials-heading">Just Watch What Parents Say.</h2>
        <div className='divide'>
          <img
            src='https://kidscenter.bzotech.com/wp-content/uploads/2024/10/h2-bg-title.png'
            className='img-fluid divider-img float-down'
            alt="divider"
          />
        </div>

        <div className="testimonials">
         
          <motion.div
            className="testimonails-card-data"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x:50 }}
            transition={{ duration: 0.5, ease:'easeInOut' }}
          >
            <img
              src="https://img.freepik.com/free-photo/happy-mother-hugging-daughter-bed_23-2148070476.jpg"
              className='testimonal-img img-fluid'
              alt="testimonial"
            />
            <p className="testimonial-txt">
              scelerisque netus auctor suscipit vehicula one pellentesque elementum vehicula
              adipiscing natoque tortor fermentum fermentum to pellentesque per interdum este mauris.
            </p>
            <span className="rating">
              {[...Array(5)].map((_, i) => (
                <div className="rating1" key={i}>
                  <FaStar className="rating-icon" />
                </div>
              ))}
            </span>
            <div className="testimonials-author">
              <h5 className="testimonial-title">Maria</h5>
              <p className="testimonails-prof">Sr. Executive</p>
            </div>
          </motion.div> 
          <motion.div
            className="testimonails-card-data"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y:50 }} 
            transition={{ duration: 0.5, delay: 0.2, ease:'easeInOut' }}
          >
            <img
              src="https://img.freepik.com/premium-photo/woman-holding-baby-wearing-shirt-that-says-baby_1288869-6028.jpg"
              className='testimonal-img img-fluid'
              alt="testimonial"
            />
            <p className="testimonial-txt">
              scelerisque netus auctor suscipit vehicula one pellentesque elementum vehicula
              adipiscing natoque tortor fermentum fermentum to pellentesque per interdum este mauris.
            </p>
            <span className="rating">
              {[...Array(5)].map((_, i) => (
                <div className="rating1" key={i}>
                  <FaStar className="rating-icon" />
                </div>
              ))}
            </span>
            <div className="testimonials-author">
              <h5 className="testimonial-title">Maria</h5>
              <p className="testimonails-prof">Sr. Executive</p>
            </div>
          </motion.div>
          <motion.div
            className="testimonails-card-data"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x:-50 }} 
            transition={{ duration: 0.5, delay: 0.4, ease:'easeInOut'  }}
          >
            <img
              src="https://img.freepik.com/premium-photo/woman-girl-are-holding-flowers_795871-24770.jpg"
              className='testimonal-img img-fluid'
              alt="testimonial"
            />
            <p className="testimonial-txt">
              scelerisque netus auctor suscipit vehicula one pellentesque elementum vehicula
              adipiscing natoque tortor fermentum fermentum to pellentesque per interdum este mauris.
            </p>
            <span className="rating">
              {[...Array(5)].map((_, i) => (
                <div className="rating1" key={i}>
                  <FaStar className="rating-icon" />
                </div>
              ))}
            </span>
            <div className="testimonials-author">
              <h5 className="testimonial-title">Maria</h5>
              <p className="testimonails-prof">Sr. Executive</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
