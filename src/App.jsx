import 'bootstrap/dist/css/bootstrap.min.css';
import './style/landing.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormEvent from './pages/FormEvent';
import LandingPage from './pages/LandingPage';
import Login  from './pages/Login';
import Register  from './pages/Register';
import ProfilePage from './pages/ProfilePage';
import Homedashboard  from './pages/Homedashboard';
import Event from './pages/Event';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element ={<LandingPage/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path='/Profile' element={<ProfilePage/>}/>
        <Route path='/Form' element={<FormEvent/>}/>
        <Route path="/Dashboard" element={<Homedashboard/>}/>
        <Route path="/Event" element={<Event/>}/>
      </Routes>
    </Router>
  )
}

export default App
