import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Navbar2 from './components/Navbar/Navbar2';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Hero /><Home /></>} />
        <Route path="/portafolio" element={<><Navbar2 /><Portfolio /></>} />
        <Route path="/contacto" element={<><Navbar2 /><Contact /></>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
