import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const DarkButton = () => {
    const { t } = useTranslation('settings');

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
        // <button type="button" id="dark-button" className={`dark-button ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
        //     <span className="material-symbols-outlined moon text">bedtime</span>
        //     <span className="material-symbols-outlined sun text">light_mode</span>
        // </button>

        <ul className='themes-buttons'>
            <li className='d-flex-column gap-10'>
                <p className='text'>{t('themes.0.title')}</p>

                <ul className='d-flex gap-10'>
                    <li>
                        <button type='button' className='theme-button active'>
                            <span class="material-symbols-outlined">light_mode</span>
                            <span className=''>Claro</span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='theme-button'>
                            <span class="material-symbols-outlined">bedtime</span>
                            <span className=''>Oscuro</span>
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default DarkButton;
