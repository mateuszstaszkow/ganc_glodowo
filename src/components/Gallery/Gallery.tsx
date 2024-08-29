import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
// @ts-ignore
import image from '../../images/header_background.jpg';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Gallery.scss';


const images = [
    { src: image, title: 'file1' },
    { src: image, title: 'file2' },
    { src: image, title: 'file3' },
    { src: image, title: 'file4' },
    { src: image, title: 'file5' },
    { src: image, title: 'file6' },
    { src: image, title: 'file7' },
    { src: image, title: 'file8' },
    { src: image, title: 'file9' },
];

Modal.setAppElement('#root');

function Gallery() {
    const { t } = useTranslation();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null as any);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
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

    const openModal = (image: any) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

    const goToPreviousImage = () => {
        setSelectedImage((prevImage: number) =>
          prevImage === 0 ? images.length - 1 : prevImage - 1
        );
    };

    const goToNextImage = () => {
        setSelectedImage((prevImage: number) =>
          prevImage === images.length - 1 ? 0 : prevImage + 1
        );
    };

    return (
      <Element id="gallery" name="gallery">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <div className="Section Content">
                  <h1>{t('gallery.title')}</h1>
                  <div className="galleryContainer">
                      <div className="gallery">
                          {images.map((image, index) => (
                            <div className="galleryItem" key={index} onClick={() => openModal(index)}>
                                <img src={image.src} alt={image.title} className="galleryImage"/>
                            </div>
                          ))}
                      </div>
                  </div>
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
                                <h3 className="Modal-title">{t('gallery.' + images[selectedImage].title)}</h3>
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

export default Gallery;
