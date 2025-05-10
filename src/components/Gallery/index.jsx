import React from 'react';
import './style.css';
import bee from '../../assets/decos/bee.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const images = [
  "https://img.freepik.com/free-photo/hands-child-who-smeared_1150-20658.jpg",
  "https://img.freepik.com/free-photo/adorable-hispanic-toddler-playing-with-balls-sitting-floor-kindergarten_839833-11673.jpg",
  "https://img.freepik.com/free-photo/adorable-hispanic-girl-playing-with-maths-puzzle-game-sitting-table-kindergarten_839833-34736.jpg",
  "https://img.freepik.com/free-photo/small-caucasian-boy-playing-with-colored-plasticine-making-figures-white-table-happy-child-idea_1268-16984.jpg",
  "https://img.freepik.com/free-photo/teacher-toddler-playing-with-maths-puzzle-game-sitting-table-kindergarten_839833-6458.jpg",
  "http://img.freepik.com/free-photo/adorable-hispanic-toddler-standing-with-serious-expression-kindergarten_839833-5492.jpg"
];

function Gallery() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/gallery');
  };

  return (
    <>
      <div className='gallery-main'>
        <h4 className='gallery-subtitle'>Gallery</h4>
        <h2 className='gallery-title'>
          See Our Kindergarten Photo <br /> Gallery!
        </h2>
        <div className='divide'>
          <img src={bee} className='img-fluid divider-img float-down' alt="bee-divider" />
        </div>

        <div className='gallery-container'>
          {images.map((img, index) => (
            <motion.div
              className="gallery-item"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={img} alt={`Gallery image ${index + 1}`} className="img-fluid" />
            </motion.div>
          ))}
        </div>

        <div className="hero-button">
          <motion.button
            className="heronew-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
            View Gallery
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Gallery;
