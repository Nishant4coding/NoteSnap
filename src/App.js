import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import Upload from "./Pages/Upload";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css'


function App() {

  
  return (

      <div className="bg-black p-10">
    <BrowserRouter  basename={window.location.pathname || ''}>
 
        {/* Navbar and other components can go here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>

    </BrowserRouter>
      </div>

  );
}

export default App;
