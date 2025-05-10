import React from "react";
import './style.css'
import CountUp from 'react-countup';


function Counts(){
    return(<>
    <div className="counts-main">
    <div className="aboutgrid-container2">
            <div className="aboutcounter">
                <div className="about-numbers">
                    <h4 className="aboutgrid-number">
                    <CountUp
                    end={10}
                    duration={10}/>+
                    </h4>
                    <p className="aboutgrid-details">
                    Years of Experience
                    </p>
                </div>
                <div className="about-numbers">
                    <h4 className="aboutgrid-number">
                    <CountUp
                    end={200}
                    duration={10}/>+
                    </h4>
                    <p className="aboutgrid-details">
                    Happy Families</p>
                </div>
                <div className="about-numbers">
                    <h4 className="aboutgrid-number">
                    <CountUp
                    end={95}
                    duration={10}/>%
                    </h4>
                    <p className="aboutgrid-details">
                    Parent Satisfaction Rate</p>
                </div>

                <div className="about-numbers">
                    <h4 className="aboutgrid-number">
                    <CountUp
                    end={15}
                    duration={10}/>
                    </h4>
                    <p className="aboutgrid-details">
                    Qualified Staff Members</p>
                </div>
            </div>
        </div>
    </div>
    </>)

}

export default Counts