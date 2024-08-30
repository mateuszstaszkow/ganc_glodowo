import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedSection from "../../shared/AnimatedSection/AnimatedSection";
import './Localisation.scss';
// @ts-ignore
import mapImage from '../../images/localisation-map.png';

Modal.setAppElement('#root'); // to prevent screen readers from reading main content when modal is open

function Localisation() {
  const { t } = useTranslation();

    return (
        <div className="Contact Section" id="localisation">
            <div className="Content">
                <h1 className="mb-20">{t('localisation.title')}</h1>
                <div>
                    <AnimatedSection
                        imageComponent={
                          <img className="localisationMap"
                               src={mapImage}
                               alt='Głodowo' />
                        }
                    ></AnimatedSection>
                </div>
            </div>
        </div>

    );
}

export default Localisation;
