import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { useNavigate, useLocation } from 'react-router-dom';

import './Languages.css'

function LanguageSwitcher() {
    const { t } = useTranslation('settings');

    const navigate = useNavigate();
    const location = useLocation();

    const routeMap = {
        '/es' : '/en',
        '/es/servicios/' : '/en/services/',
        '/es/servicios/alquiler-de-gruas-telescopicas' : '/en/services/telescopic-crane-rental',

        '/es/maquinaria/' : '/en/machinery/',
        '/es/nosotros/' : '/en/about-us/',

        '/en' : '/es',
        '/en/services/' : '/es/servicios/',
        '/en/services/telescopic-crane-rental' : '/es/servicios/alquiler-de-gruas-telescopicas',

        '/en/machinery/': '/es/maquinaria/',
        '/en/about-us/': '/es/nosotros/'
    };

    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng).then(() => {
            localStorage.setItem('language', lng);

            const currentPath = location.pathname;
            const newPath = routeMap[currentPath] || currentPath.replace(/^\/(en|es)/, `/${lng}`);

            document.documentElement.lang = lng;

            navigate(newPath, { replace: true });
        }).catch(error => {
            console.error("Error changing language:", error);
        });
    };

    return(
        <ul className='language-buttons'>
            <li>
                <button type='button' className='language-button en active' onClick={() => changeLanguage('es')}>
                    <span>ES</span>
                </button>
            </li>
            <li>
                <span>-</span>
            </li>
            <li>
                <button type='button' className='language-button es' onClick={() => changeLanguage('en')}>
                    <span>EN</span>
                </button>
            </li>
        </ul>
    );
}

export default LanguageSwitcher;
