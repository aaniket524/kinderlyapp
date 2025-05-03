import React from "react";
import './style.css'

function AllPageHeader({title}){
    return(
        <>
        <div className="allpageheader-main">
            <h2 className="allpageheader-title">
                {title}
            </h2>

        {/* <img src="https://wgl-dsites.net/littledino/wp-content/uploads/2019/08/page_title_bg.png"
        className="img-fluid allpageheader-img"/> */}
        </div>

        </>
    )
}
export default AllPageHeader