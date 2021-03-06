import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import ChatWithUs from './pages/ChatWithUs';
import ErrorPage from './pages/ErrorPage';
import Figurehead from './pages/Figurehead';
import PatientEducation from './pages/PatientEducation';
import AboutTheBusiness from './pages/AboutTheBusiness';
import GetTherapist from './pages/GetTherapist';
import GetNeurologist from './pages/GetNeurologist';

// This whole app is dispalyed on index.html file from public/index.html
function App() {
  return (
    <>
          {/* Router allows us to create links and paths to different files under navigation and they help avoid the page reloading */}
          <Router>
            <nav>
              {/* Here "to" is used to create a direction for path */}
              <Link to="/" className='links brand_title'>Digital Neuro</Link>
              <Link to="/about" className='links small_links'>About</Link>
              <Link to="/chatwithus" className='links small_links'>Chat With Us</Link>
            </nav>
            <span id='more-links'>
              <Link to="/figurehead" className='more-items'>Figurehead</Link>
              <Link to="/patienteducation" className='more-items'>Personal Education</Link>
              <Link to="/aboutthebusiness" className='more-items'>About The Business</Link>
              <Link to="/therapist" className='more-items'>Therapist</Link>
              <Link to="/neurologist" className='more-items'>Neurologist</Link>
            </span>
            {/* Routes allows Route to give a link path and accept the file inside element where the link will be dirrected */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/chatwithus' element={<ChatWithUs />}/>
              <Route path='/figurehead' element={<Figurehead />} />
              <Route path='/patienteducation' element={<PatientEducation />} />
              <Route path='/aboutthebusiness' element={<AboutTheBusiness />} />
              <Route path='/therapist' element={<GetTherapist />} />
              <Route path='/neurologist' element={<GetNeurologist />} />
              <Route path="*" element={ <ErrorPage/> }/>
            </Routes>
          </Router>
    </>
  );
}
export default App;
