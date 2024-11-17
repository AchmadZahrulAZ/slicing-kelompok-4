import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import OurServices from './pages/OurServices';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import { MetadataProvider } from './context/MetadataContext.jsx';

const App = () => {
  return (
    <MetadataProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </Router>
    </MetadataProvider>
  );
};

export default App;

