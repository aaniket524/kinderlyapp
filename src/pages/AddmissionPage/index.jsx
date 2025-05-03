import React from "react";
import './style.css'
import Steps from "../../components/Steps";
import EnquirySection from "../../components/EnquirySection";
import EduProgram from "../../components/EduProgram";
import AddmissionProcess from "../../components/AddmissionProcess";
import AllPageHeader from "../../layout/AllPageHeader";


function AddmissionPage(){
    return(
        <>
            <AllPageHeader title="Addmission Process" />
        
        <div className="addmissionpage">
            <AddmissionProcess/>
        {/* <EnquirySection/> */}
        </div>
       </>
    )
}

export default AddmissionPage