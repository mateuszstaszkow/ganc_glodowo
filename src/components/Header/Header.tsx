import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import logo from '../../images/glodowo-logo.png';
import './Header.scss';
import { PhoneInTalk } from "@mui/icons-material";

function Header() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className="App-nav py-4 lg:px-4">
            <div onClick={scrollToTop} style={{ cursor: 'pointer' }} className="hidden lg:block">
              <div className="flex">
                <img src={logo} alt="Ganc Izolacje Logo" className="App-logo"/>
                <div className="text-left">
                  <h2 className="m-0">Głodowo</h2>
                  <p className="subtitle">WAKACJE PRZEZ CAŁY ROK</p>
                </div>
              </div>
            </div>
          <ul className="text-sm me-4 lg:text-base">
            <li><ScrollLink to="about" smooth={true} duration={500} offset={-80}>Informacje</ScrollLink></li>
                <li><ScrollLink to="offer" smooth={true} duration={500} offset={-80}>Działki</ScrollLink></li>
                <li><ScrollLink to="realizations" smooth={true} duration={500} offset={-80}>Dokumenty</ScrollLink></li>
                <li><ScrollLink to="career" smooth={true} duration={500} offset={-80}>Galeria</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} duration={500} offset={-80}>Lokalizacja</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} duration={500} offset={-80}>Kontakt</ScrollLink></li>
            <li>
              <a href="tel:+48607159066" className="flex gap-2 align-items-center">
                <PhoneInTalk className="telephone-icon"></PhoneInTalk>
                +48 607 159 066
              </a>
            </li>
          </ul>
          <div className="language-switcher">
                <span>|</span>
                <button onClick={() => changeLanguage('pl')}>PL</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
                <button onClick={() => changeLanguage('de')}>DE</button>
                <button onClick={() => changeLanguage('uk')}>UA</button>
            </div>
        </nav>
    );
}

export default Header;
