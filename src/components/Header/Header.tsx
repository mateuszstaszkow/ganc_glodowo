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
                  <h3 className="m-0">{i18n.t('header.title')}</h3>
                  <p className="subtitle uppercase">{i18n.t('header.subtitle')}</p>
                </div>
              </div>
            </div>
          <ul className="text-sm me-4 lg:text-base">
            <li>
              <ScrollLink to="information" smooth={true} duration={500}>{i18n.t('information')}</ScrollLink>
            </li>
            <li>
              <ScrollLink to="plots" smooth={true} duration={500}>{i18n.t('plots')}</ScrollLink>
            </li>
            <li>
              <ScrollLink to="documents" smooth={true} duration={500}>{i18n.t('documents')}</ScrollLink>
            </li>
            <li>
              <ScrollLink to="gallery" smooth={true} duration={500}>{i18n.t('gallery')}</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500}>Lokalizacja</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500}>Kontakt</ScrollLink>
            </li>
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
