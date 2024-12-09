import React, { useEffect, useState } from 'react';

const DarkButton = () => {
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
        <button type="button" id="dark-button" className={`dark-button ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
            <span className="material-symbols-outlined moon text">bedtime</span>
            <span className="material-symbols-outlined sun text">light_mode</span>
        </button>
    );
};

export default DarkButton;
