import React from 'react';
import './style.css';

function OurClasses(){
    return(
        <>
        <div className='ourclasses-main'>
            <h4 className='ourclasses-subheading'>
                Courses
            </h4>
            <h2 className='ourclasses-heading'>
            Our Classes
            </h2>
            <p className='ourclasses-para'>
            The Kinderly mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.


            </p>
            <div className='ourclasses'>
                <div className='ourclasses-card'>
                    <img src='https://wgl-dsites.net/littledino/wp-content/uploads/2019/08/info-box_01-1.png'
                    className='ourlasses-img img-fluid' />
                    <h4 className='our-classes-title'>
                        Early Education
                    </h4>
                    <p className='ourclasses-desc'>
                    Children with better pre-reading skills, richer vocabularies.
                    </p>
                    <button className='read-more'>
                        Read More
                    </button>
                </div>
                <div className='ourclasses-card'>
                    <img src='https://wgl-dsites.net/littledino/wp-content/uploads/2019/08/info-box_01-2.png'
                    className='ourlasses-img img-fluid'/>
                    <h4 className='our-classes-title'>
                        ABC Program

                    </h4>
                    <p className='ourclasses-desc'>
                    Children with better pre-reading skills, richer vocabularies.
                    </p>
                    <button className='read-more'>
                        Read More
                    </button>
                </div>
                <div className='ourclasses-card'>
                    <img src='https://wgl-dsites.net/littledino/wp-content/uploads/2019/08/info-box_01-3.png'
                    className='ourlasses-img img-fluid'/>
                    <h4 className='our-classes-title'>
                    First Steps 4K

                    </h4>
                    <p className='ourclasses-desc'>
                    Children with better pre-reading skills, richer vocabularies.
                    </p>
                    <button className='read-more'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default OurClasses