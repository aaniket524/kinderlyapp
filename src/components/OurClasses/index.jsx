import React from 'react';
import './style.css';
import pro1 from '../../assets/aboutus/eduprogrm1.png'
import pro2 from '../../assets/aboutus/eduprogram2.png'
import pro3 from '../../assets/aboutus/eduprogram3.png'
import { motion } from "framer-motion";

function OurClasses(){
    return(
        <>
        <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -30 }}
         transition={{ duration: 0.5 }}
        className='ourclasses-main'>
            <h4 className='ourclasses-subheading'>
                Courses
            </h4>
            <h2 className='ourclasses-heading'>
            Our Classes
            </h2>
            <p className='ourclasses-para'>
            The Kinderly mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.


            </p>
            <div className='ourclasses'>
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5 }}
                className='ourclasses-card'>
                    <img src={pro1}
                    className='ourlasses-img img-fluid' />
                    <h4 className='our-classes-title'>
                        Early Education
                    </h4>
                    <p className='ourclasses-desc'>
                    Children with better pre-reading skills, richer vocabularies.
                    </p>
                    <button className='read-more'>
                        Read More
                    </button>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                className='ourclasses-card'>
                    <img src={pro2}
                    className='ourlasses-img img-fluid'/>
                    <h4 className='our-classes-title'>
                        ABC Program

                    </h4>
                    <p className='ourclasses-desc'>
                    Children with better pre-reading skills, richer vocabularies.
                    </p>
                    <button className='read-more'>
                        Read More
                    </button>
                </motion.div>
                <motion.div 
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -30 }}
                   transition={{ duration: 0.5 }}
                className='ourclasses-card'>
                    <img src={pro3}
                    className='ourlasses-img img-fluid'/>
                    <h4 className='our-classes-title'>
                    First Steps 4K

                    </h4>
                    <p className='ourclasses-desc'>
                    Children with better pre-reading skills, richer vocabularies.
                    </p>
                    <button className='read-more'>
                        Read More
                    </button>
                </motion.div>
            </div>
        </motion.div>
        </>
    )
}

export default OurClasses