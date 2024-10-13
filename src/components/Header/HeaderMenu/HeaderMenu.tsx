import React from 'react';
import './HeaderMenu.scss';
import { PhoneInTalk } from '@mui/icons-material';
import { Link as ScrollLink } from "react-scroll/modules";
import { useTranslation } from "react-i18next";
import HeaderLogo from "../HeaderLogo/HeaderLogo";

const HeaderMenu: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header-menu flex-col lg:flex-row p-4 lg:p-0 pt-12 lg:pt-0">
      <div className="hidden lg:block">
        <HeaderLogo></HeaderLogo>
      </div>

      <ul className="text-sm me-4 lg:text-base flex-col lg:flex-row gap-2 lg:gap-0">
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
          <ScrollLink to="localisation" smooth={true} duration={500}>{i18n.t('localisation')}</ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>{i18n.t('contact')}</ScrollLink>
        </li>
        <li>
          <a href="tel:+48607159066" className="flex gap-2 align-items-center">
            <PhoneInTalk className="telephone-icon"></PhoneInTalk>
            +48 607 159 066
          </a>
        </li>
      </ul>
      <div className="language-switcher mx-auto lg:mx-0">
        <span className="hidden lg:block">|</span>
        <button onClick={() => changeLanguage('pl')}>PL</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('de')}>DE</button>
        <button onClick={() => changeLanguage('uk')}>UA</button>
      </div>
    </div>
  );
};

export default HeaderMenu;
