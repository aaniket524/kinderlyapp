import React, { useState } from "react";
import './style.css';
import bee from '../../assets/decos/bee.png';
import faq from '../../assets/faq.webp';
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

function Faq() {
    const [activeId, setActiveId] = useState(1);

    const handleClick = (id) => {
        setActiveId(prevId => (prevId === id ? null : id));
    };

    const faqs = [
        {
            id: 1,
            question: "What age groups do you accept at Kiddie?",
            answer: "We provide care for children from 6 weeks to 5 years old, with specialized programs for infants, toddlers, and preschoolers."
        },
        {
            id: 2,
            question: "What curriculum do you follow?",
            answer: "We follow a play-based learning curriculum designed to promote cognitive and social development."
        },
        {
            id: 3,
            question: "Are meals provided for the children?",
            answer: "Yes, we provide healthy and nutritious meals tailored to age-specific dietary needs."
        },
        {
            id: 4,
            question: "What are your operating hours?",
            answer: "We operate from 8:00 AM to 6:00 PM, Monday to Friday."
        },
        {
            id: 5,
            question: "Do you offer part-time enrollment?",
            answer: "Yes, we offer flexible part-time and full-time enrollment options."
        },
    ];

    return (
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="faq-main">
            <h4 className="faq-subheading">FAQ’s</h4>
            <h2 className="faq-heading">Frequently Asked Question</h2>
            <div className='divide'>
                <img src={bee} className='img-fluid divider-img float-down' />
            </div>
            <div className="faq-container">
                <div className="faq-image-section">
                    <img src={faq} className="img-fluid faq-image" />
                </div>
                <div className="faq-faq-section">
                    {faqs.map((item) => (
                        <div className="faq-main-container" key={item.id}>
                            <div className="faq-main-title" onClick={() => handleClick(item.id)}>
                                <div className="faq-icon">
                                    {activeId === item.id ? (
                                        <FaMinus className="fa-plus-icon active" />
                                    ) : (
                                        <FaPlus className="fa-plus-icon" />
                                    )}
                                </div>
                                <div className="faq-title-part">
                                    <h4 className="faq-title">{item.question}</h4>
                                    <p className={`faq-para ${activeId === item.id ? 'open' : ''}`}>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Faq;
