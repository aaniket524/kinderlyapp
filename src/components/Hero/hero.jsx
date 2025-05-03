import React from "react";
import './style.css'
function Hero (){
    return(
        <>
        <div className="hero-main">
            <div className="hero-container">
            <div className="hero-third">
                <div className="hero-image">
                    <img src="https://kidscenter.bzotech.com/wp-content/uploads/2024/11/h4-img1.png" 
                    className="hero-image2 img-fluid"/>
                    </div>
                </div>
                <div className="hero-second">
                    <h2 className="hero-heading"> 
                    The premier destination for 
                    active 
                    <img src="https://kidscenter.bzotech.com/wp-content/uploads/2024/11/h4-img-text.png"
                    className="hero-text-img img-fluid"/>
                    </h2>
                    <p className="hero-para">
                    We believe that learning should be a joyful journey. Our curriculum integrates imaginative 
                    activities with playful experiences, allowing children to explore their creativity while having fun.
                    </p>
                   
                   {/* <center> */}
                   <div className="hero-button" >
                   <button className="hero-btn">
                        Get a Call Back
                    </button>
                   </div>
                    {/* </center> */}
               
                   
                </div>
                <div className="hero-first">
                    <div className="hero-image">
                    <img src="https://kidscenter.bzotech.com/wp-content/uploads/2024/11/h4-img2.png"
                     className="hero-image1 img-fluid"/>
                    </div>
                </div>
              

            </div>
        </div>
        
        </>
    )
}
export default Hero