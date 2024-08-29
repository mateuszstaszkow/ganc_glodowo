import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedSection from "../../shared/AnimatedSection/AnimatedSection";
import './Contact.scss';

Modal.setAppElement('#root'); // to prevent screen readers from reading main content when modal is open

function Contact() {
    const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit: any = (event: SubmitEvent) => {
    event.preventDefault();
    const form = event.target as any;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    fetch('https://gancbackend-production.up.railway.app/api/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.ok) {
        toast.success(t('contact_modal_success'));
        form.reset();
        closeModal();
      } else {
        throw new Error(t('contact_modal_error'));
      }
    }).catch(() => {
      toast.error(t('contact_modal_error'));
    });
  };

    return (
        <div className="Contact Section" id="contact">
            <div className="Content">
                <h2 className="section-header">{t('contact')}</h2>
                <div>
                    <AnimatedSection
                        isLeft={false}
                        imageComponent={
                            <div className="Contact-map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.147418185647!2d16.29857507712753!3d54.23057957255893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4701d3231e3a3b69%3A0xa9aaac96f6db999c!2sGanc%20Izolacje%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1721654482245!5m2!1spl!2spl"
                                    width="100%"
                                    height="450"
                                    style={{border: 'none'}}
                                    title="Map"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        }
                        textComponent={
                            <div>
                                <div className="mt-4 text-center lg:text-left">
                                    <p><strong>{t('address')}:</strong></p>
                                    <p><strong>GANC IZOLACJE SP z o.o.<br/>76-004 Sianów<br/>ul. Dworcowa 16</strong>
                                    </p>
                                    <p className="contactDetail justify-center lg:justify-start mt-4">
                                      <FaPhone className="contactIcon"/>
                                      <a href="tel:+48943171490"
                                         className="contactLink">
                                        <strong>+48 607 159 066</strong>
                                      </a>
                                    </p>
                                    <p className="contactDetail justify-center lg:justify-start">
                                      <FaEnvelope className="contactIcon"/>
                                      <a href="mailto:biuro@ganc.com.pl"
                                         className="contactLink">
                                        <strong>biuro@ganc.com.pl</strong>
                                      </a>
                                    </p>
                                    <p><strong>{t('contact_text')}</strong></p>
                                    <div className="mt-2">
                                        <button onClick={openModal} className="contactButton">
                                            <strong>{t('contact_button')}</strong></button>
                                    </div>
                                </div>
                            </div>
                        }
                    ></AnimatedSection>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Contact Form"
                className="Modal"
                overlayClassName="Overlay"
            >
                <h2>{t('contact')}</h2>
                <form onSubmit={handleSubmit}>
                    <label>{t('name')}</label>
                    <input type="text" name="name" required className="modal-input"/>

                    <label>{t('email')}</label>
                    <input type="email" name="email" required className="modal-input"/>

                    <label>{t('message')}</label>
                    <textarea name="message" rows={5} required className="modal-textarea"></textarea>

                  <div className="modal-buttons">
                    <button type="button"
                            onClick={closeModal}
                            className="modal-close-button">
                      <strong>{t('close')}</strong>
                    </button>
                    <button type="submit">
                      <strong>{t('send')}</strong>
                    </button>
                  </div>
                </form>
            </Modal>
          <ToastContainer/>
        </div>

    );
}

export default Contact;
