import React from "react";
import './style.css'
import enqimage from '../../assets/contacts/enquiry-image.avif'
import { useNavigate } from "react-router-dom";

function EnquirySection(){
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/contact-us')
    }
    return(
        <>
        <div className="enquirysection-main">
            <div className="enquirysection-container">
                <div className="enquirysection1">
                    <h2 className="enquiy-heading">
                    Ready to Give Your Child the Best Start!
                    </h2>
                    <p className="enquiry-para">With experienced educators, a safe and engaging environment, 
                        and a focus on individual growth.
                        Every moment in your child’s early years is crucial. Our programs are designed to inspire curiosity, and build essential skills that will last a lifetime.
</p>
                        <div className="enquiry-button">
                        <button className="enquiry-btn" onClick={handleClick}>
                            Enquire Now
                        </button>
                        </div>
                      
                </div>
                <div className="enquirysection2">
                    <img src={enqimage}
                    className="img-fluid enquiry-image"/>
                    </div>
            </div>
            
        </div>
        
        </>
    )
}
export default EnquirySection