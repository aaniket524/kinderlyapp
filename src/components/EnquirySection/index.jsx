import React from "react";
import './style.css'

function EnquirySection(){
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
                        <button className="enquiry-btn">
                            Enquire Now
                        </button>
                        </div>
                      
                </div>
                <div className="enquirysection2">
                    <img src="https://img.freepik.com/free-vector/hand-drawn-illustration-children-playing-with-dough_23-2149679698.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    className="img-fluid enquiry-image"/>
                    </div>
            </div>
            
        </div>
        
        </>
    )
}
export default EnquirySection