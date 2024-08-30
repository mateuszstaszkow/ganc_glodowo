import React from 'react';
import { Element } from 'react-scroll';

import "./Home.scss";
import { Link as ScrollLink } from "react-scroll/modules";
import { useTranslation } from "react-i18next";

function Home() {
    const t = useTranslation().i18n.t;

    return (
        <Element id="home"
                 name="home">
            <div className="Section relative">
                <header className="App-header"></header>
                <div className="homeTitle">
                    <h1>{t('home.title')}</h1>
                    <div className="mt-8 mb-12">
                        <h2>{t('home.subtitle')}</h2>
                    </div>
                    <ScrollLink to="plots"
                                smooth={true}
                                duration={500}>
                        <button>{t('home.button')}</button>
                    </ScrollLink>
                </div>
            </div>
        </Element>
    );
}

export default Home;
