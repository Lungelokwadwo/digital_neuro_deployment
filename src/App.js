import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import ErrorPage from './pages/ErrorPage';
import Figurehead from './pages/Figurehead';
import PatientEducation from './pages/PatientEducation';
import AboutTheBusiness from './pages/AboutTheBusiness';
import ContactUs from './pages/ContactUs';
import GetTherapist from './pages/GetTherapist';
import GetNeurologist from './pages/GetNeurologist';

function App() {
  return (
    <>
          <Router>
            <nav>
              <Link to="/" className='links'>Home</Link>
              <Link to="/about" className='links'>About</Link>
              <Link to="/profile" className='links'>Profile</Link>
              <Link to="/profile" className='links'>Chat With Us</Link>
            </nav>
            <span id='more-links'>
              <Link to="/figurehead" className='more-items'>Figurehead</Link>
              <Link to="/patienteducation" className='more-items'>Personal Education</Link>
              <Link to="/aboutthebusiness" className='more-items'>About The Business</Link>
              <Link to="/therapist" className='more-items'>Therapist</Link>
              <Link to="/neurologist" className='more-items'>Neurologist</Link>
              <Link to="/contactus" className='more-items'>Contact Us</Link>
            </span>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/profile' element={<Profile />}/>
              <Route path='/figurehead' element={<Figurehead />} />
              <Route path='/patienteducation' element={<PatientEducation />} />
              <Route path='/aboutthebusiness' element={<AboutTheBusiness />} />
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='/therapist' element={<GetTherapist />} />
              <Route path='/neurologist' element={<GetNeurologist />} />
              <Route path="*" element={ <ErrorPage/> }/>
            </Routes>
          </Router>
    </>
  );
}
export default App;
