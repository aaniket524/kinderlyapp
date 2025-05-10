import React from 'react';
import './style.css';
import bee from '../../assets/decos/bee.png'
import edu1 from '../../assets/hedu/h2-edu1.png'
import edu2 from '../../assets/hedu/h2-edu2.png'
import edu3 from '../../assets/hedu/h2-edu3.png'
import edu4 from '../../assets/hedu/h2-edu4.png'

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
       <img src={bee}
        className='img-fluid divider-img float-down'/>
       </div>
        <div className='eduprogram-container'>
            <div className='eduprograms'>
                <div className='eduprogram-image'>
                    <img src={edu1}
                    className='img-fluid eduprogram-img'/>
                <h4 className='eduprogram-title'>Little Explores</h4>
                <p className='eduprogram-para'>
                    Toddlers engage in sensory activities that promotes Curiosity.
                </p>
                </div>
            </div>
            <div className='eduprograms'>
                <div className='eduprogram-image'>
                    <img src={edu2}
                    className='img-fluid eduprogram-img'/>
                <h4 className='eduprogram-title'>Creative Learners</h4>
                <p className='eduprogram-para'>
                Emphasizes creative expression through art, music.
                </p>
                </div>
            </div>
            <div className='eduprograms'>
                <div className='eduprogram-image'>
                    <img src={edu3}
                    className='img-fluid eduprogram-img'/>
                <h4 className='eduprogram-title'>Active Adventurers</h4>
                <p className='eduprogram-para'>
                Children in this program engage in physical activities.
                </p>
                </div>
            </div>
            <div className='eduprograms'>
                <div className='eduprogram-image'>
                    <img src={edu4}
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