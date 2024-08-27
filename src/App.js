import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About';
import Offer from './components/Offer';
import Realizations from './components/Realizations';
import Career from './components/Career';
import Contact from './components/Contact';
import CookieConsent from './components/CookieConsent';

function App() {

  return (
      <Router>
        <div className="App">
          <Header />
        <div className="App-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/realizations" element={<Realizations />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Home />
          <About />
          <Offer />
          <Realizations />
          <Career />
          <Contact />
        </div>
          <CookieConsent />
          <footer className="py-8 mt-16">
            <p>&copy; 2024 Ganc Izolacje</p>
            <p className="text-gray-500 text-sm mt-2">
              Developed by
              <a className="underline ms-1"
                 href="https://github.com/podrozniasia"
                 target="_blank"
                 rel="noreferrer noopener">
                Data Science Joanna Szwoch
              </a>
              <span className="mx-1">&</span>
              <a className="underline"
                 href="https://github.com/mateuszstaszkow"
                 target="_blank"
                 rel="noreferrer noopener">
                Mateusz Staszków Software Development
              </a>
            </p>
          </footer>
        </div>
      </Router>
  );
}

export default App;
