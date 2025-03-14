import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programmes from './pages/Programmes';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import SpaceLab from './pages/SpaceLab';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/programmes' element={<Programmes />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/space-lab' element={<SpaceLab />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
