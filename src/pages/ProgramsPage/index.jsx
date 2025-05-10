import React from "react";
import EduProgram from "../../components/EduProgram";
import Programs from "../../components/Programs";
import AllPageHeader from "../../layout/AllPageHeader";
import { motion } from "framer-motion";

function ProgramsPage(params) {
    return(
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}>

            <AllPageHeader title="Our Programs" />

        <Programs/>
        </motion.div>

    )
}
export default ProgramsPage