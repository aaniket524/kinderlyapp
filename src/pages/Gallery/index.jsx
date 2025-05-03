import React from "react";
import AllPageHeader from "../../layout/AllPageHeader";
import Gallery from "../../components/Gallery";
import './style.css'
function GalleryPage (){
    return(
        <>
            <AllPageHeader title="Kinderly Gallery" />

      <div className="gallery-page">
      <div className='gallery-main'>
            <h4 className='gallery-subtitle'>
            Gallery
            </h4>
            <h2 className='gallery-title'>
             Our Kindergarten Photo Gallery!
            </h2>
            <div className='divide'>
       <img src='https://kidscenter.bzotech.com/wp-content/uploads/2024/10/h2-bg-title.png'
        className='img-fluid divider-img float-down'/>
       </div>
            <div className='gallery-container'>
            <div class="gallery-item">
                <img src="https://kidscenter.bzotech.com/wp-content/uploads/2024/09/event4.jpg" alt="Image 1"/>
                </div>
                <div class="gallery-item">
                <img src="https://img.freepik.com/free-photo/adorable-hispanic-toddler-playing-with-balls-sitting-floor-kindergarten_839833-11673.jpg" alt="Image 1"/>
                </div>
                <div class="gallery-item">
                <img src="https://img.freepik.com/free-photo/adorable-hispanic-girl-playing-with-maths-puzzle-game-sitting-table-kindergarten_839833-34736.jpg" alt="Image 1"/>
                </div>
                <div class="gallery-item">
                <img src="https://img.freepik.com/free-photo/small-caucasian-boy-playing-with-colored-plasticine-making-figures-white-table-happy-child-idea_1268-16984.jpg" alt="Image 1"/>
                </div>
                <div class="gallery-item">
                <img src="https://img.freepik.com/free-photo/teacher-toddler-playing-with-maths-puzzle-game-sitting-table-kindergarten_839833-6458.jpg" alt="Image 1"/>
                </div>
                <div class="gallery-item">
                <img src="http://img.freepik.com/free-photo/adorable-hispanic-toddler-standing-with-serious-expression-kindergarten_839833-5492.jpg" alt="Image 1"/>
                </div>
               
                
                 <div class="gallery-item">
                <img src="https://img.freepik.com/free-photo/two-kids-playing-with-construction-blocks-sitting-table-kindergarten_839833-1748.jpg" alt="Image 1"/>
                </div>
                 <div class="gallery-item">
                <img src="https://img.freepik.com/free-photo/plastic-letters-alphabet-school-desk_1147-362.jpg" alt="Image 1"/>
                </div>
                <div class="gallery-item">
                <img src="https://img.freepik.com/free-photo/happy-kids-elementary-school_53876-138139.jpg" alt="Image 1"/>
                </div>
                <div class="gallery-item">
                <img src="https://kidscenter.bzotech.com/wp-content/uploads/2024/09/event4.jpg" alt="Image 1"/>
                </div>
                <div class="gallery-item">
                <img src="https://img.freepik.com/free-photo/hands-child-who-smeared_1150-20658.jpg" alt="Image 1"/>
                </div>

                <div class="gallery-item">
                <img src="https://img.freepik.com/free-photo/adorable-hispanic-toddler-playing-with-maths-puzzle-game-sitting-table-kindergarten_839833-23297.jpg" alt="Image 1"/>
                </div>

                <div class="gallery-item">
                <img src="https://img.freepik.com/free-photo/adorable-hispanic-girl-student-sitting-table-drawing-paper-kindergarten_839833-7686.jpg" alt="Image 4"/></div>
             
             </div>
           
            </div>
           
      </div>
        </>
    )
}

export default GalleryPage