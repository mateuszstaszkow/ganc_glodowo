import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DocumentScanner } from "@mui/icons-material";
import './Documents.scss';
// @ts-ignore
import file from '../../assets/dane_dzialki.pdf';
import AnimatedSection from "../../shared/AnimatedSection/AnimatedSection";

function Documents() {
    const { t } = useTranslation();
    const fileIds: number[] = new Array(9).fill(1).map( (_, i) => i + 1);

    return (
        <Element id="documents" name="documents">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="Section Content">
                  <h1>{t('documents.title')}</h1>
                  <AnimatedSection
                    imageComponent={
                      <div className="galleryContainer">
                        <div className="gallery">
                          {fileIds.map((id, index) => (
                            <div className="galleryItem" key={index}>
                              <a href={file}
                                 target="_blank"
                                 rel="noopener noreferrer">
                                <div className="document">
                                  <DocumentScanner></DocumentScanner>
                                  <p>{t('documents.file' + id)}</p>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    }
                  ></AnimatedSection>
                </div>
            </motion.div>
        </Element>
    );
}

export default Documents;
