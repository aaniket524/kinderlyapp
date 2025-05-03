import React from "react";
import './style.css'
import Testimonials from "../Testimonials";

function AboutGrid(){
    return(<>
    <div className="aboutgrid-main">
        <div className="aboutgrid-container1">
            <div className="aboutgrid1">
                <img src="https://img.freepik.com/free-vector/new-team-members-concept-illustration_114360-31169.jpg"
                className="aboutgrid-image img-fluid"/>
            </div>
            <div className="aboutgrid2">
                <div className="aboutgrid-content">
                <h4 className="aboutgrid-subheading">
                    About Us
                    </h4>
                    <h4 className="aboutgrid-heading">
                    Welcome To Little Kinderly
                    </h4>
                    <p className="aboutgridpara">
                    Look into the eyes of a young child and see the sparkle and wonder.
                     Develop these passions and watch the adult bloom into someone special. 
                     At Kinderly Center, we work every day to build the foundations for amazing futures.
                     <br/>

                    </p>
                    <p  className="aboutgridpara">
                    At Kinderly Daycare, we are deeply passionate about everything we do. Our commitment to providing exceptional care is reflected in our attention to every child’s unique needs, fostering an environment where learning, creativity, and emotional development thrive.

                    </p>
                    <p className="aboutgridpara">
                    Our team’s dedication ensures each child feels supported, valued, and inspired to explore the world around them with curiosity and confidence.

                    </p>

                    <button className="aboutpage-btn">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>

        {/* // counter */}
      
        
    </div>
   
    </>)
}

export default AboutGrid