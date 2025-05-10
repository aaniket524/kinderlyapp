import React from "react";
import './style.css'
import Steps from "../../components/Steps";
import EnquirySection from "../../components/EnquirySection";
import EduProgram from "../../components/EduProgram";
import AddmissionProcess from "../../components/AddmissionProcess";
import AllPageHeader from "../../layout/AllPageHeader";
import { motion } from "framer-motion";


function AddmissionPage(){
    return(
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}>


            <AllPageHeader title="Addmission Process" />
        
        <div className="addmissionpage">
            <AddmissionProcess/>
        {/* <EnquirySection/> */}
        </div>
        </motion.div>
    )
}

export default AddmissionPage