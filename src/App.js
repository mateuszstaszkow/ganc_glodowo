import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Information from './components/Information/Information';
import Plots from './components/Plots/Plots';
import Documents from './components/Documents/Documents';
import Gallery from './components/Gallery/Gallery';
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
            <Route path="/information" element={<Information />} />
            <Route path="/plots" element={<Plots />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Home />
          <Information />
          <Plots />
          <Documents />
          <Gallery />
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
