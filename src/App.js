import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllSection from './pages/AllSection';
import Navbar from './components/Header/Navbar';
import Footer from './pages/Footer';
import NavService from './pages/NavPages/NavService';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllSection />} />
        <Route path="/service" element={<NavService />} />
        <Route path="/ser" element={<div>Reds</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
