import React from 'react';
import { Element } from 'react-scroll';

import "./Home.scss";

function Home() {
    return (
        <Element name="home">
            <div className="Section relative">
                <header className="App-header"></header>
                <div className="homeTitle">
                    <h1>Wakacje przez cały rok</h1>
                    <div className="mt-8">
                        <h2>Odkryj działki nad brzegiem jeziora w pobliżu Trójmiasta</h2>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Home;
