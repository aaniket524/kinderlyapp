
import './index.css'
import Navbar from './layout/navbar/navbar'
import Footer from './layout/Footer'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AboutPage from './pages/About'
import Home from './pages/Home'
import ContactUsPage from './pages/ContactUsPage'
import ProgramsPage from './pages/ProgramsPage'
import GalleryPage from './pages/Gallery'
import AppointmentPage from './pages/AppointmentPage'

import AddmissionPage from './pages/AddmissionPage'

function App() {
  const location = useLocation();

  return (
    
    <>
     <Navbar/>
        <AnimatePresence mode="wait">

     
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/schedule-a-tour" element={<AppointmentPage />} />
        <Route path="/addmission" element={<AddmissionPage />} />
      </Routes>
      <Footer />
      </AnimatePresence>
</>
  )
}

export default App
