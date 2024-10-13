import React from 'react';
import './HeaderLogo.scss';
import { animateScroll as scroll } from "react-scroll/modules";
import { useTranslation } from "react-i18next";
// @ts-ignore
import logo from '../../../images/glodowo-logo.png';

const HeaderLogo: React.FC = () => {
  const { i18n } = useTranslation();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div onClick={scrollToTop} style={{cursor: 'pointer'}}>
      <div className="flex">
        <img src={logo} alt="Ganc Izolacje Logo" className="App-logo"/>
        <div className="text-left">
          <h3 className="m-0">{i18n.t('header.title')}</h3>
          <p className="subtitle uppercase">{i18n.t('header.subtitle')}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
