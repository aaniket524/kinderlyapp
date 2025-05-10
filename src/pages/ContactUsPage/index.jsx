import React from 'react'
import ContactUs from '../../components/ContactUs'
import Faq from '../../components/Faq'
import AllPageHeader from "../../layout/AllPageHeader";
import { motion } from "framer-motion";

function ContactUsPage(){
    return(<motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}>
        <AllPageHeader title="Contact Us" />

    <ContactUs/>
    </motion.div>
    )
}

export default ContactUsPage