import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Gallery.scss';
import AnimatedSection from "../../shared/AnimatedSection/AnimatedSection";
// @ts-ignore
import landscape1 from '../../images/landscape/landscape1.JPG';
// @ts-ignore
import landscape3 from '../../images/landscape/landscape3.JPG';
// @ts-ignore
import landscape5 from '../../images/landscape/landscape5.JPG';
// @ts-ignore
import landscape8 from '../../images/landscape/landscape8.JPG';
// @ts-ignore
import landscape10 from '../../images/landscape/landscape10.JPG';
// @ts-ignore
import landscape11 from '../../images/landscape/landscape11.JPG';
// @ts-ignore
import landscape12 from '../../images/landscape/landscape12.JPG';
// @ts-ignore
import landscape13 from '../../images/landscape/landscape13.JPG';
// @ts-ignore
import landscape14 from '../../images/landscape/landscape14.JPG';
// @ts-ignore
import landscape15 from '../../images/landscape/landscape15.JPG';
// @ts-ignore
import landscape16 from '../../images/landscape/landscape16.JPG';
// @ts-ignore
import landscape17 from '../../images/landscape/landscape17.JPG';
// @ts-ignore
import landscape18 from '../../images/landscape/landscape18.JPG';
// @ts-ignore
import landscape20 from '../../images/landscape/landscape20.JPG';
// @ts-ignore
import landscape21 from '../../images/landscape/landscape21.JPG';
// @ts-ignore
import landscape22 from '../../images/landscape/landscape22.JPG';
// @ts-ignore
import landscape23 from '../../images/landscape/landscape23.JPG';
// @ts-ignore
import landscape24 from '../../images/landscape/landscape24.JPG';
// @ts-ignore
import landscape25 from '../../images/landscape/landscape25.JPG';
// @ts-ignore
import landscape27 from '../../images/landscape/landscape27.JPG';
// @ts-ignore
import landscape29 from '../../images/landscape/landscape29.JPG';



const images: { src: any; title: string; }[] = [
    { src: landscape1, title: 'Działka nad jeziorem głodowo, fot. 1' },
    { src: landscape3, title: 'Działka nad jeziorem głodowo, fot. 3' },
    { src: landscape5, title: 'Działka nad jeziorem głodowo, fot. 5' },
    { src: landscape8, title: 'Działka nad jeziorem głodowo, fot. 8' },
    { src: landscape10, title: 'Działka nad jeziorem głodowo, fot. 10' },
    { src: landscape11, title: 'Działka nad jeziorem głodowo, fot. 11' },
    { src: landscape12, title: 'Działka nad jeziorem głodowo, fot. 12' },
    { src: landscape13, title: 'Działka nad jeziorem głodowo, fot. 13' },
    { src: landscape14, title: 'Działka nad jeziorem głodowo, fot. 14' },
    { src: landscape15, title: 'Działka nad jeziorem głodowo, fot. 15' },
    { src: landscape16, title: 'Działka nad jeziorem głodowo, fot. 16' },
    { src: landscape17, title: 'Działka nad jeziorem głodowo, fot. 17' },
    { src: landscape18, title: 'Działka nad jeziorem głodowo, fot. 18' },
    { src: landscape20, title: 'Działka nad jeziorem głodowo, fot. 20' },
    { src: landscape21, title: 'Działka nad jeziorem głodowo, fot. 21' },
    { src: landscape22, title: 'Działka nad jeziorem głodowo, fot. 22' },
    { src: landscape23, title: 'Działka nad jeziorem głodowo, fot. 23' },
    { src: landscape24, title: 'Działka nad jeziorem głodowo, fot. 24' },
    { src: landscape25, title: 'Działka nad jeziorem głodowo, fot. 25' },
    { src: landscape27, title: 'Działka nad jeziorem głodowo, fot. 27' },
    { src: landscape29, title: 'Działka nad jeziorem głodowo, fot. 29' }
];

// TODO: make it working
// const unusedImages: number[] = [2, 4, 6, 7, 9, 19, 26, 28];
//
// const images: { src: any; title: string; }[] = [];
//
//   [...Array(29).keys()]
//     .map(index => index + 1)
//     .filter(index => !unusedImages.includes(index))
//     .map(index =>
//         import(`../../images/landscape/landscape${index}.JPG`)
//           .then(module => {
//               images.push({
//                   src: module.default || module,
//                   title: 'photo.title'
//               });
//           })
//       .catch(error => console.error(`Error loading image ${index}:`, error))
//   )

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
                  <AnimatedSection
                    imageComponent={
                        <div className="galleryContainer">
                            <div className="gallery">
                                {images.map((image, index) => (
                                  <div className="galleryItem" key={index} onClick={() => openModal(index)}>
                                      <img src={image.src} alt={image.title} className="galleryImage"/>
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
                                <h3 className="Modal-title">{t('gallery.photo.title')} {selectedImage + 1}</h3>
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
