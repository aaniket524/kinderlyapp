import React from 'react';
import './style.css'

function EduProgram(){
    return(<>
    <div className='eduprogram-main'>
        <h4 className='eduprogram-subheading'>
        Engaging Learning Programs
        </h4>
        <h2 className='eduprogram-heading'>
        Our Educational Adventures
        </h2>
       <div className='divide'>
       <img src='https://kidscenter.bzotech.com/wp-content/uploads/2024/10/h2-bg-title.png'
        className='img-fluid divider-img'/>
       </div>
        <div className='eduprogram-container'>
            <div className='eduprograms'>
                <div className='eduprogram-image'>
                    <img src='https://kidscenter.bzotech.com/wp-content/uploads/2024/10/h2-edu1.png'
                    className='img-fluid eduprogram-img'/>
                <h4 className='eduprogram-title'>Little Explores</h4>
                <p className='eduprogram-para'>
                    Toddlers engage in sensory activities that promotes Curiosity.
                </p>
                </div>
            </div>
            <div className='eduprograms'>
                <div className='eduprogram-image'>
                    <img src='https://kidscenter.bzotech.com/wp-content/uploads/2024/10/h2-edu2.png'
                    className='img-fluid eduprogram-img'/>
                <h4 className='eduprogram-title'>Creative Learners</h4>
                <p className='eduprogram-para'>
                Emphasizes creative expression through art, music.
                </p>
                </div>
            </div>
            <div className='eduprograms'>
                <div className='eduprogram-image'>
                    <img src='https://kidscenter.bzotech.com/wp-content/uploads/2024/10/h2-edu3.png'
                    className='img-fluid eduprogram-img'/>
                <h4 className='eduprogram-title'>Active Adventurers</h4>
                <p className='eduprogram-para'>
                Children in this program engage in physical activities.
                </p>
                </div>
            </div>
            <div className='eduprograms'>
                <div className='eduprogram-image'>
                    <img src='https://kidscenter.bzotech.com/wp-content/uploads/2024/10/h2-edu4.png'
                    className='img-fluid eduprogram-img'/>
                <h4 className='eduprogram-title'>Imaginative Innovators</h4>
                <p className='eduprogram-para'>
                Encourages problem-solving and critical thinking.
                </p>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default EduProgram