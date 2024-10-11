import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Plots.scss';
// @ts-ignore
import plotMap from '../../images/landscape/main2.JPG';
import AnimatedSection from "../../shared/AnimatedSection/AnimatedSection";

function Plots() {
    const { t } = useTranslation();
    return (
        <Element name="plots">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="Section Content">
                    <h1>{t('plots_title')}</h1>
                    <div className="section-content">
                        <AnimatedSection
                          imageComponent={
                              <img src={plotMap}
                                   className="plotMap"
                                   alt="Działki"/>
                          }
                        ></AnimatedSection>
                    </div>
                </div>
            </motion.div>
        </Element>
    );
}

export default Plots;
