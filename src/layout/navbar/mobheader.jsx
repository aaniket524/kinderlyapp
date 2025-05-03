import React, { useState } from "react";
import './mobheader.css';
import { Link, useNavigate } from "react-router-dom";
import cross from '../../assets/cross-menu.svg';
import menu from '../../assets/menu-alt-1.svg'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


function MobHeader(params) {
  const navigate = useNavigate()
    const handleClick =()=>{
        navigate('/contact-us')
    }
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    // const toggleSidebar = () => {
    //     setSidebarOpen(!isSidebarOpen);
    // };

    // const closeSidebar = () => {
    //     setSidebarOpen(false);
    // };
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };
 
      const closeSidebar = () => {
        setSidebarOpen(true);
      };
  
      React.useEffect(() => {
        if (!isSidebarOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }, [isSidebarOpen]);
    return(
        <>
        <div className="mobheader-main">
            <div className="mobheader">
            <div className="mob-log">
                <Link to='/' >                        <h1 className="mobo-log">Kinderly</h1>
                </Link>
            </div>
            <div className="mob-hamburger" onClick={toggleSidebar}>
                <img src=
                {isSidebarOpen ? menu
                 : 
               cross
              }
                className={`img-fluid mob-menu-logo ${!isSidebarOpen ? 'open' : ''}`}/>
            </div>
              
            </div>
            <div className="mobheader-cross">
            <div className="mob-log">
                <img src="https://bydos.themejunction.net/wp-content/themes/bydos/assets/images/logo/primary-logo.png"
                className="mob-logo img-fluid"/>
            </div>
            <div className="mob-hamburger">
               <div className="nav-logo-container">
                        <h1 className="nav-log">Kinderly</h1>
                    </div>
            </div>
            </div>
            <div className={`mobsidebar ${isSidebarOpen ? '' : 'open'}`}>
            <div className="mobheader2">
            <div className="mob-log">
              <Link to='/'>  
              {/* <div className="nav-logo-container"> */}
                        <h1 className="mobo-log">Kinderly</h1>
              
              </Link>
            </div>
            <div className="mob-hamburger" onClick={toggleSidebar}>
            <img src=
            {isSidebarOpen ? menu
                 : 
                cross
              }
                className="mob-menu-logo img-fluid"  />
             
            </div>
               {/* <div className="mob-hamburger" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="mob-menu-logo img-fluid" />
                    </div> */}
            </div>
                <div className="mob-sidebar">
                <div className="mob-h-menu-items">
                <ul className="mob-menu-ul">
                <Link to='/' onClick={closeSidebar}> <li className='mob-m-items'>Home</li></Link>
                <Link to='/about-us' onClick={closeSidebar}><li className='mob-m-items'>About</li></Link>
                <Link to ='/programs' onClick={closeSidebar}><li className='mob-m-items'> Programs</li></Link>
                <Link to ='/addmission' onClick={closeSidebar}><li className='mob-m-items'>Addmission</li></Link>
                <Link to ='/gallery' onClick={closeSidebar}><li className='mob-m-items'>Gallery</li></Link>
            
                <Link to ='/contact-us' onClick={closeSidebar}><li className='mob-m-items'>Contact Us</li></Link>
                                                
                                           
                  
                </ul>
            </div>
            <div className="common-infor">
            <h3 className="mob-info">Information</h3>
            <p className="mobinfo">
            support@Kinderly.com                    
            </p>
            <p className="mobinfo">
            (+012) 3456 7890                   
             </p>
            <p className="mobinfo">
            Santa, United States                  
            </p>

            </div>
            <div className="mob-s-icons">
           
                <h3 className="mob-follow">Follow Us:</h3>
                 <div className= 'm-social-icons'>
                                <div className="s-icon1">
                                <FaInstagram className="sicon" onClick={closeSidebar}/>
                                </div>
                                <div className="s-icon2">
                                <FaFacebook className="sicon" onClick={closeSidebar}/>
                                </div>
                                <div className="s-icon2">
                                <FaTwitter className="sicon" onClick={closeSidebar}/>
                                </div>
                                <div className="s-icon2">
                                <FaYoutube className="sicon" onClick={closeSidebar}/>
                                </div>
                               </div>
            </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default MobHeader