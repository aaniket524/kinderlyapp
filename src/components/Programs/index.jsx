import React from "react";
import './style.css';

function Programs(){
    return(<>

    <div className="programs-main">
        <h4 className="steps-subheading">
        Programs
        </h4>
        <h2 className="steps-heading">Our Special Offerings</h2>
        <p className="programs-para">

        </p>
        <div className='divide'>
       <img src='https://kidscenter.bzotech.com/wp-content/uploads/2024/10/h2-bg-title.png'
        className='img-fluid divider-img float-down'/>
       </div>
        <div className="programs">
            <div className="program-container1">
                <div className="program-image">
                <img src="https://img.freepik.com/free-vector/hand-drawn-parent-helping-child-learn_52683-106213.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                    // "https://img.freepik.com/premium-photo/picture-children-playing-childrens-play-area_854727-53626.jpg?w=740"
                    // "https://img.freepik.com/free-vector/hand-drawn-vowels-illustration_23-2150140075.jpg?t=st=1746095152~exp=1746098752~hmac=e29dfebe5372585735cf647a07b32450da4b86d38cfa3099d92e2d772598ad99&w=996"
                    // "https://img.freepik.com/premium-vector/story-time-teacher-reading-group-children_65364-25.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&w=740"
                    className="programs-img img-fluid"/>

                </div>

                <div className="programs-content">
                    <h2 className="programs-title">Toddler
                        <span> (1.5 - 3 years)</span>
                    </h2>
                    <p className="programs-desc">
                    Our Toddler Program offers a warm and engaging environment where young children
                     begin to explore and make sense of the world around them. Through sensory play, 
                     music, movement, and interactive storytelling, toddlers develop early cognitive 
                     and motor skills while building strong emotional connections with peers and caregivers.
                    </p>
                    < h4 className="program-subtitle">
                    Key features:</h4>
                    <ul className="programs-ul">
                        <li>Stimulating sensory activities to foster curiosity and exploration.</li>
                        <li>Safe and structured routines that provide comfort and security.</li>
                        <li>Early social interaction through group play and collaborative activities.</li>
                    </ul>
                </div>
            </div>
            <div className="program-container1">
                <div className="program-image">
                <img src="https://img.freepik.com/premium-vector/hand-drawn-parent-helping-child-learn_52683-106192.jpg?w=740"
                //"https://img.freepik.com/premium-vector/using-math-tools-isolated-cartoon-vector-illustration_107173-23202.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&w=740"
                    // "https://img.freepik.com/premium-vector/cute-little-kids-sitting-floor-studying-alphabet-with-their-teacher_723224-4484.jpg?w=826"
                    className="programs-img img-fluid"/>

                </div>

                <div className="programs-content">
                    <h2 className="programs-title">Pre-School
                        <span>(2 - 3 years)</span>
                    </h2>
                    <p className="programs-desc">
                        Our Pre-School Program focuses on providing a nurturing environment where young children can 
                        begin exploring the world around them. Through sensory play, storytelling, and guided activities, 
                        toddlers are encouraged to develop motor skills, 
                        language, and early social interaction
                    </p>
                    < h4 className="program-subtitle">
                    Key features:</h4>
                    <ul className="programs-ul">
                        <li>Sensory play activities to stimulate curiosity.</li>
                        <li>Structured routines that provide comfort and security.</li>
                        <li>Social and emotional growth through group play and interaction.</li>
                    </ul>
                </div>
            </div>
            
            <div className="program-container1">
                <div className="program-image">
                    <img src="https://img.freepik.com/free-vector/hand-drawn-parents-helping-children-learn_52683-106207.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&w=740"
                    // "https://img.freepik.com/free-vector/kids-reading-illustration_114360-8533.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&w=740"
                    // "https://img.freepik.com/free-vector/hand-drawn-speech-therapy-illustration_23-2149214837.jpg?t=st=1746080145~exp=1746083745~hmac=cc9968a71b60b98ddbfe1be548efbab22b238f5e0c3495d9ef2d978da4d4bc10&w=740"
                    // "https://img.freepik.com/free-vector/flat-international-mother-language-day-illustration_23-2149250146.jpg?t=st=1746080180~exp=1746083780~hmac=2915c31ffca1a7e9f64416065536e12a350164584157da394397586702646a15&w=740"
                    className="programs-img img-fluid"/>

                </div>

                <div className="programs-content">
                    <h2 className="programs-title">Kindergarten
                        <span>(3 - 4 years)</span>
                    </h2>
                    <p className="programs-desc">
                    Our Pre-K Program prepares children for a smooth transition to elementary school. 
                    With a focus on building foundational academic skills and social development, children 
                    are encouraged to explore, ask questions, and engage in group learning activities.
                    </p>
                    < h4 className="program-subtitle">
                    Key features:</h4>
                    <ul className="programs-ul">
                        <li>Play-based learning that stimulates critical thinking and curiosity.</li>
                        <li>Supportive routines to foster security and independence.</li>
                        <li>Activities that nurture social and emotional growth through peer interaction.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Programs