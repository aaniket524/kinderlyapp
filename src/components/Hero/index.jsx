import React from "react";
import './style.css';
import herobanner from '../../assets/hero-banner.webp'
import text from '../../assets/text.png'
import { useNavigate } from "react-router-dom";

function HeroNew(){
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/contact-us')
    }
    return(
        <>
        <div className="heronew-main">
            <div className="heronew">
                <div className="heronew-container1">
                <div className="heronew-inner">
                    <h2 className="heronew-heading"> 
                    The premier destination for 
                    active 
                  <div >
                  <img src={text} rel="preload"
                    className="heronew-text-img img-fluid"/>
                  </div>
                    </h2>
                    <p className="heronew-para">
                    We believe that learning should be a joyful journey. Our curriculum integrates imaginative 
                    activities with playful experiences, allowing children to explore their creativity while having fun.
                    </p>
                   
                   {/* <center> */}
                   <div className="heronew-button" >
                    
                   <button className="heronew-btn" onClick={handleClick}>
                        Get a Call Back
                    </button>
                   </div>
                    {/* </center> */}
               
                   
                </div>
                </div>
                <div className="heronew-container2">
                    <img src={herobanner} rel="preload"
                    // "https://themes.graphtheme.com/kintergarden/static/media/slider.129d1012.svg"
                    // "https://img.freepik.com/premium-vector/two-cute-children-boy-girl-reading-book-tree-books-vector-illustration_491934-587.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    // "https://img.freepik.com/free-vector/number-123-with-face-expression-children-characters_1308-97780.jpg?t=st=1745928739~exp=1745932339~hmac=c955ff0b781d81494bc27a1c888554abf231be8d309294b54110e967c04a32ac&w=740"
                    // "https://img.freepik.com/free-vector/world-book-day-illustration_23-2149323887.jpg"

                    // "https://img.freepik.com/premium-vector/concept-design-children-education_29937-4566.jpg?w=740"
                    className="img-fluid heronew-image"/>
                </div>
            </div>
        </div>

        </>
    )
}

export default HeroNew;