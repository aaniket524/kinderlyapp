import React from "react";
import Faq from "../../components/Faq";
import AllPageHeader from "../../layout/AllPageHeader";
import { motion } from "framer-motion";

function FaqPage(){
    return(<motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}>

    <AllPageHeader title="Faq's"/>
    <Faq/>
    </motion.div>)
}
export default FaqPage;