import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedSection from "./shared/AnimatedSection/AnimatedSection";
import aboutImage from '../images/about.jpg';

function About() {
    const { t } = useTranslation();
    return (
        <Element name="about">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="Section Content">
                    <h2 className="section-header">{t('about')}</h2>
                    <div className="section-content">
                        <AnimatedSection
                            imageComponent={<img src={aboutImage} alt="Aktionariat" className="aboutImage"/>}
                            isLeft={true}
                            textComponent={
                                <div className="section-text-right">
                                    <p>{t('about_paragraph1')}</p>
                                    <p>{t('about_paragraph2')}</p>
                                    <p>{t('about_paragraph3')}</p>
                                    <p>{t('about_paragraph4')}</p>
                                </div>
                            }
                        ></AnimatedSection>
                    </div>
                </div>
            </motion.div>
        </Element>
    );
}

export default About;
