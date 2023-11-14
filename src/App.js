import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import Services from './pages/Services';
import Finished from './pages/Finished';
import Contacts from './pages/Contacts';
import './App.css';

const App = () => {
  return (
    <Router> {/* Use BrowserRouter or HashRouter here, but only once */}
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/finished" element={<Finished />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
