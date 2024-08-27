import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function CookieConsent() {
  const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setVisible(false);
    };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setVisible(false);
  };

    if (!visible) {
        return null;
    }

    return (
        <div className="cookie-consent">
      <p>{t('cookie_message')}</p>
      <div className="cookie-buttons flex-col lg:flex-row">
        <button className="accept" onClick={handleAccept}>{t('cookie_accept')}</button>
        <button className="decline" onClick={handleDecline}>{t('cookie_decline')}</button>
      </div>
        </div>
    );
}

export default CookieConsent;
