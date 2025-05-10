import React from "react";
import Appointment from "../../components/Appointment";
import AllPageHeader from "../../layout/AllPageHeader";
import { motion } from "framer-motion";

function AppointmentPage(){
    return(<motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}>
            <AllPageHeader title="Schedule a Tour" />

    <Appointment/>
    </motion.div>)
}
export default AppointmentPage