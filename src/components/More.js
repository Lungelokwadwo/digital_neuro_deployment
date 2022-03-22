import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Figurehead from '../pages/Figurehead';
import PatientEducation from '../pages/PatientEducation';
import AboutTheBusiness from '../pages/AboutTheBusiness';
import ContactUs from '../pages/ContactUs';

const More = () => {
  return (
    <div>
        <Router>
            <nav>
                <Link to="/figurehead" className='more-link'>Figurehead</Link>
                <Link to="/patientEducation" className='more-link'>Patient Education</Link>
                <Link to="/aboutthebusiness" className='more-link'>About The Business</Link>
                <Link to="/contactus" className='more-link'>Contact Us</Link>
            </nav>
            <Routes>
                <Route path='' element={<Figurehead />} />
                <Route path='' element={<PatientEducation />} />
                <Route path='' element={<AboutTheBusiness />} />
                <Route path='' element={<ContactUs />} />
            </Routes>
        </Router>
    </div>
  )
}

export default More