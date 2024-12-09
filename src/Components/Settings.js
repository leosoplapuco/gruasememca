import React from 'react';
// import { useTranslation } from 'react-i18next';
import Languages from './Languages';
import DarkButton from './DarkButton';

function Settings(){
    // const { t } = useTranslation('settings');

    return(
        <>
            <div className='settings-container'>
                <div className='settings'>
                    <button className='settings-button'>
                        <span className="material-symbols-outlined">stat_1</span>
                    </button>

                    <ul>
                        <Languages/>
                        <li>
                        <DarkButton/>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Settings;
