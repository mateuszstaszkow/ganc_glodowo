import React from 'react';
import { useTranslation } from 'react-i18next';
import careerImage from '../images/career.jpg';
import AnimatedSection from "../shared/AnimatedSection/AnimatedSection"; // Upewnij się, że obrazek jest we właściwej ścieżce

function Career() {
    const { t } = useTranslation();
    return (
        <div className="Career Section" id="career">
            <div className="Content">
                <h2 className="section-header">{t('career_title')}</h2>
                <div className="section-content">
                    <AnimatedSection
                        isLeft={false}
                        imageComponent={<img src={careerImage} alt="Career"/>}
                        textComponent={
                            <div className="section-text-left">
                                <p className="career-intro">{t('career_intro')}</p>
                                <ul className="career-list">
                                    <li className="career-list-item">{t('career_position1')}</li>
                                    <li className="career-list-item">{t('career_position2')}</li>
                                </ul>
                                <p>{t('career_offer')}</p>
                                <p>{t('career_contact')}</p>
                                <p>{t('career_notice')}</p>
                            </div>
                        }
                    ></AnimatedSection>
                </div>
            </div>
        </div>
    );
}

export default Career;
