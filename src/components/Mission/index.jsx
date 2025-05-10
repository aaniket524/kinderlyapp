import React from "react";
import './style.css'
import { motion } from "framer-motion";

function Mission(){
    return(<>
    <div className="mission-main">
        <div className="missions">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.5 }}
        className="mission">
            <h4 className="mission-title">Our Mission
            </h4>
            <p className="mission-para">
            At Kiddie Daycare, our mission is to provide a loving, safe, 
            and stimulating environment where every child can grow and thrive. 
            We are committed to nurturing each child's emotional, social, and 
            cognitive development through personalized care, creative play, and structured learning.
            </p>
        </motion.div>
        <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
        className="vission">
        <h4 className="mission-title">Our Vission
        </h4>
        <p className="mission-para">
        At Kiddie Daycare, we believe in fostering a sense of community, curiosity, 
        and compassion as the foundation for a child's development. Our values center on providing a 
        space where children feel safe to build strong relationships, engage in meaningful play, and grow both socially and emotionally.


            </p>
        </motion.div>
        </div>
    </div>
    </>)
}

export default Mission