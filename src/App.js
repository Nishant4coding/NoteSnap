import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import Upload from "./Pages/Upload";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'


function App() {

  
  return (

    
    <Router>
      <div className="bg-black p-10">
        {/* Navbar and other components can go here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
