import React from "react";
import './style.css';

function About (){
    return(
        <>
        <div className="about-main">
            <div className="about-container">
                <div className="about-content">
                    <h4 className="about-us-subheading">
                    About Us
                    </h4>
                    <h2 className="about-us-heading">
                    Committed to Your Child's Growth and Happiness
                    </h2>
                    {/* <img src="https://kidscenter.bzotech.com/wp-content/uploads/2024/10/h2-bg-title.png" 
                    className="constant img-fluid"/> */}
                    <p className="about-us-para">
                    At Kiddie, we provide a safe, supportive, and joyful environment where children thrive. 
                    Our dedicated team is passionate about inspiring a love for learning and curiosity in every child.
                    
                    </p>
                    <div className="about-details">
                        <div className="about-detail-container">
                            <div className="detail-count">
                                <h2 className="detail-counter">
                                    10+
                                </h2>
                            </div>
                            <div className="detial-text">
                            <p className="detail-texts">
                            Years of proven experience on the child daycare.
                                </p>
                            </div>
                        </div>
                        <div className="about-detail-container">
                            <div className="detail-count">
                                <h2 className="detail-counter">
                                    200+
                                </h2>
                            </div>
                            <div className="detial-text">
                            <p className="detail-texts">
                            Happy families taking services from us.</p>
                            </div>
                        </div>
                        {/* <div className="about-detail-container">
                            <div className="detail-count">
                                <h2 className="detail-counter">
                                    100%
                                </h2>
                            </div>
                            <div className="detial-text">
                            <p className="detail-texts">
                            Child Safety.</p>
                            </div>
                        </div>
                        <div className="about-detail-container">
                            <div className="detail-count">
                                <h2 className="detail-counter">
                                    100%
                                </h2>
                            </div>
                            <div className="detial-text">
                            <p className="detail-texts">
                            Child Safety.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="about-images">
                    <div className="about-image-collage" >
                    <img src="https://img.freepik.com/premium-vector/real-life-family-moments-vector-illustration-concepts_1253202-60998.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    className="img-fluid about-image-1"/>
                       <img src="https://img.freepik.com/premium-photo/female-teacher-leading-kindergarten-classroom-activities-engaging-kindergarten-students-playful_483187-9342.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    className="img-fluid about-image-4"/>
                    </div>
                    <div className="about-image-collage" >
                    <img src="https://img.freepik.com/free-photo/international-day-education-celebration_23-2150930970.jpg?t=st=1745739218~exp=1745742818~hmac=20c4bb413f17f4006d651550d9530a9123ca140b379d01be6ed42273594b30ca&w=740"
                    className="img-fluid about-image-2"/>
                     <img src="https://img.freepik.com/free-photo/diverse-kids-reading-books_53876-146406.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    className="img-fluid about-image-3"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About