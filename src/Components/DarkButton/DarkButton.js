import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './DarkButton.css';

const DarkButton = () => {
    const { t } = useTranslation('header');

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
        if (darkModeEnabled) {
            document.body.classList.add('dark-mode');
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const isDark = document.body.classList.toggle('dark-mode');
        setIsDarkMode(isDark);

        if (isDark) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    return(
        <button type="button" id="dark-button" className={`dark-button ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode} title={t('DarkButton.0.title')}>
            <span className="material-icons">contrast</span>
        </button>
    );
};

export default DarkButton;
