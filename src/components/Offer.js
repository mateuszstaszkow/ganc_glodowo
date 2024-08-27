import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import coolitLogo from '../images/coolit_logo.png';
import emsLogo from '../images/ems_logo.png';
import pfeufferLogo from '../images/pfeuffer_logo.png';
import AnimatedSection from "./shared/AnimatedSection/AnimatedSection";

function Offer() {
    const { t } = useTranslation();
    return (
        <Element name="offer">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="Section Content">
                    <h2 className="section-header">{t('offer')}</h2>
                    <div className="section-content">
                        <AnimatedSection
                            isLeft={false}
                            imageComponent={
                                <div className="partners-logos-vertical">
                                    <a href="https://www.coolit.de" target="_blank" rel="noopener noreferrer">
                                        <img src={coolitLogo} alt="Coolit Logo" className="partner-logo"/>
                                    </a>
                                    <a href="https://www.ems.com" target="_blank" rel="noopener noreferrer">
                                        <img src={emsLogo} alt="EMS Logo" className="partner-logo"/>
                                    </a>
                                    <a href="https://www.pfeuffer.de" target="_blank" rel="noopener noreferrer">
                                        <img src={pfeufferLogo} alt="Pfeuffer Logo" className="partner-logo"/>
                                    </a>
                                </div>
                            }
                            textComponent={
                                <div className="section-text-half text-justify text-base">
                                    <p>{t('offer_intro')}</p>
                                    <h3 className="my-4 ">{t('profile')}</h3>
                                    <ul>
                                        <li>{t('profile_item1')}</li>
                                        <li>{t('profile_item2')}</li>
                                        <li>{t('profile_item3')}</li>
                                        <li>{t('profile_item4')}</li>
                                        <li>{t('profile_item5')}</li>
                                        <li>{t('profile_item6')}</li>
                                        <li>{t('profile_item7')}</li>
                                        <li>{t('profile_item8')}</li>
                                        <li>{t('profile_item9')}</li>
                                        <li>{t('profile_item10')}</li>
                                        <li>{t('profile_item11')}</li>
                                    </ul>
                                    <p>{t('partner_info')}</p>
                                </div>
                            }
                        ></AnimatedSection>
                    </div>
                </div>
            </motion.div>
        </Element>
    );
}

export default Offer;
