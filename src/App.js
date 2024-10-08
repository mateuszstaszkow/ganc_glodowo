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
import Contact from './components/Contact/Contact';
import CookieConsent from './components/CookieConsent';
import Localisation from "./components/Localisation/Localisation";

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
            <Route path="/localisation" element={<Localisation/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Home />
          <Information />
          <Plots />
          <Documents />
          <Gallery />
          <Localisation />
          <Contact />
        </div>
          <CookieConsent />
          <footer className="py-8 mt-16">
            <p>&copy; 2024 Głodowo</p>
            <p className="text-gray-300 text-sm mt-2">
              Developed by
              <a className="underline ms-1"
                 href="https://mateuszstaszkow.github.io/ms-portfolio/"
                 target="_blank"
                 rel="noreferrer noopener">
                Mateusz Staszków Software Development
              </a>
              <span className="mx-1">&</span>
              <a className="underline"
                 href="https://github.com/podrozniasia"
                 target="_blank"
                 rel="noreferrer noopener">
                Data Science Joanna Szwoch
              </a>
            </p>
          </footer>
        </div>
      </Router>
  );
}

export default App;
