import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Languages from './Languages';
import DarkButton from './DarkButton';

function Settings() {
    const { t } = useTranslation('settings');
    const [isActive, setIsActive] = useState(false);

    const toggleSettings = () => {
        setIsActive(!isActive);
    };

    return(
        <div className={`settings-container ${isActive ? 'active' : ''}`}>
            <div className='settings d-flex-column gap-20'>
                <button className='settings-button d-flex-align-center-justify-center' onClick={toggleSettings}>
                    <span className="material-symbols-outlined">stat_1</span>
                </button>

                <div className='settings-top'>
                    <span className="material-symbols-outlined">settings</span>
                    <p className='text-title'>{t('title')}</p>
                </div>

                <div className='d-flex gap-20'>
                    <Languages/>
                    <DarkButton/>
                </div>
            </div>
        </div>
    );
}

export default Settings;
