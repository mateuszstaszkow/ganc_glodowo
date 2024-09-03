import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedSection from "../../shared/AnimatedSection/AnimatedSection";
import './Contact.scss';

function Contact() {
    const { t } = useTranslation();

  const handleSubmit: any = (event: SubmitEvent) => {
    // TODO: emailjs
  };

    return (
        <div className="Contact Section" id="contact">
            <div className="Content">
                <h1 className="mb-20">{t('contact')}</h1>
                <div>
                    <AnimatedSection
                        isLeft={false}
                        imageComponent={
                          <div>
                            <form onSubmit={handleSubmit}>
                              <label>{t('name')}</label>
                              <input type="text" name="name" required className="modal-input"/>

                              <label>{t('email')}</label>
                              <input type="email" name="email" required className="modal-input"/>

                              <label>{t('message')}</label>
                              <textarea name="message" rows={2} required className="modal-textarea"></textarea>

                              <div className="modal-buttons">
                                <button type="submit">
                                  <strong>{t('send')}</strong>
                                </button>
                              </div>
                            </form>
                          </div>
                        }
                        textComponent={
                          <div>
                            <div className="mt-4 text-center lg:text-left">
                              <p><strong>{t('address')}:</strong></p>
                              <p>Jakub Szwoch<br/>76-004 Sianów<br/>ul. Dworcowa 16
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
                                      <a href="mailto:kubaszw@gmail.com"
                                         className="contactLink">
                                        <strong>kubaszw@gmail.com</strong>
                                      </a>
                                    </p>
                                    <p className="mt-8 ">
                                      {t('contact_text')}
                                    </p>
                                </div>
                            </div>
                        }
                    ></AnimatedSection>
                </div>
            </div>
          <ToastContainer/>
        </div>

    );
}

export default Contact;
