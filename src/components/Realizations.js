import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import image1 from '../images/realizacje_1.jpeg';
import image2 from '../images/realizacje_2.jpeg';
import image3 from '../images/realizacje_3.jpeg';
import image4 from '../images/realizacje_4.jpeg';
import image5 from '../images/realizacje_5.jpeg';
import image6 from '../images/realizacje_6.jpeg';
import image7 from '../images/realizacje_7.jpeg';
import image8 from '../images/realizacje_8.jpeg';
import image9 from '../images/realizacje_9.jpeg';
import AnimatedSection from "./shared/AnimatedSection/AnimatedSection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const images = [
    { src: image1, title: 'Realizacja 1' },
    { src: image2, title: 'Realizacja 2' },
    { src: image3, title: 'Realizacja 3' },
    { src: image4, title: 'Realizacja 4' },
    { src: image5, title: 'Realizacja 5' },
    { src: image6, title: 'Realizacja 6' },
    { src: image7, title: 'Realizacja 7' },
    { src: image8, title: 'Realizacja 8' },
    { src: image9, title: 'Realizacja 9' },
];

Modal.setAppElement('#root');

function Realizations() {
    const { t } = useTranslation();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (modalIsOpen) {
                if (event.key === 'ArrowLeft') {
                    goToPreviousImage();
                } else if (event.key === 'ArrowRight') {
                    goToNextImage();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalIsOpen]);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

    const goToPreviousImage = () => {
        setSelectedImage((prevImage) =>
            prevImage === 0 ? images.length - 1 : prevImage - 1
        );
    };

    const goToNextImage = () => {
        setSelectedImage((prevImage) =>
            prevImage === images.length - 1 ? 0 : prevImage + 1
        );
    };

    return (
        <Element name="realizations">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="Section Content">
                    <h2 className="section-header">{t('realizations')}</h2>
                    <AnimatedSection
                        imageComponent={
                            <div className="Gallery-container">
                                <div className="Gallery">
                                    {images.map((image, index) => (
                                        <div className="Gallery-item" key={index} onClick={() => openModal(index)}>
                                            <img src={image.src} alt={image.title} className="Gallery-image"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    ></AnimatedSection>
                    {selectedImage !== null && (
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            className="Modal ModalLarge"
                            overlayClassName="Overlay"
                        >
                            <div className="modal-content">
                                <FaArrowLeft className="modal-arrow left" onClick={goToPreviousImage}/>
                                <div className="text-center">
                                    <img src={images[selectedImage].src} alt={images[selectedImage].title} className="Modal-image"/>
                                    <h3 className="Modal-title">{images[selectedImage].title}</h3>
                                </div>
                                <FaArrowRight className="modal-arrow right" onClick={goToNextImage}/>
                            </div>
                        </Modal>
                    )}
                </div>
            </motion.div>
        </Element>
    );
}

export default Realizations;
