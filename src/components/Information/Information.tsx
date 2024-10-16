import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Information.scss';
import {
  BeachAccess,
  DirectionsBus,
  DirectionsCar,
  Forest,
  LocationCity,
  Nature,
  School,
  ShoppingCart,
  Water
} from "@mui/icons-material";
import AnimatedSection from "../../shared/AnimatedSection/AnimatedSection";

function Information() {
    const { t } = useTranslation();
    return (
        <Element id="information"
                 name="information">
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
            <div className="Section Content">
              <h3 className="uppercase mt-20">{t('information_subtitle')}</h3>
              <h1>{t('information_title')}</h1>
              <div className="section-content mt-20">
                <AnimatedSection
                  imageComponent={
                    <div className="galleryContainer">
                      <div className="gallery">
                        <div className="galleryItem">
                          <BeachAccess></BeachAccess>
                          <p>{t('information_element1')}</p>
                        </div>
                        <div className="galleryItem">
                          <Nature></Nature>
                          <p>{t('information_element2')}</p>
                        </div>
                        <div className="galleryItem">
                          <Water></Water>
                          <p>{t('information_element3')}</p>
                        </div>
                        <div className="galleryItem">
                          <Forest></Forest>
                          <p>{t('information_element4')}</p>
                        </div>
                        <div className="galleryItem">
                          <LocationCity></LocationCity>
                          <p>{t('information_element5')}</p>
                        </div>
                        <div className="galleryItem">
                          <DirectionsCar></DirectionsCar>
                          <p>{t('information_element6')}</p>
                        </div>
                        <div className="galleryItem">
                          <DirectionsBus></DirectionsBus>
                          <p>{t('information_element7')}</p>
                        </div>
                        <div className="galleryItem">
                          <School></School>
                          <p>{t('information_element8')}</p>
                        </div>
                        <div className="galleryItem">
                          <ShoppingCart></ShoppingCart>
                          <p>{t('information_element9')}</p>
                        </div>
                      </div>
                    </div>
                  }
                ></AnimatedSection>
              </div>

              <div className="notification">
                <h3>{t('information_notification_title')}</h3>
                <p>{t('information_notification_message')}</p>
              </div>

              <div className="video-container">
                <iframe loading="lazy"
                        src="https://www.youtube.com/embed/cjSTG03iL3U?si=Cz-UE1FFAlq3Pc-8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                </iframe>
              </div>
            </div>
          </motion.div>
        </Element>
    );
}

export default Information;
