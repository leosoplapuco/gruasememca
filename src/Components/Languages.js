import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { useNavigate, useLocation } from 'react-router-dom';

function LanguageSwitcher() {
    const { t } = useTranslation('settings');

    const navigate = useNavigate();
    const location = useLocation();

    const routeMap = {
        '/es': '/en',
        '/es/servicios/': '/en/services/',
        '/es/maquinaria/': '/en/machinery/',
        '/es/nosotros/': '/en/about-us/',
        '/en': '/es',
        '/en/services/': '/es/servicios/',
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
            <li className='d-flex-column gap-10'>
                <p className='text'>{t('languages.0.title')}</p>

                <ul className='d-flex gap-10'>
                    <li>
                        <button type='button' className='language-button en active' onClick={() => changeLanguage('es')}>
                            <img src="/assets/images/icons/espanol-icono.png" alt='bandera española'></img>
                            <span>Español</span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='language-button es' onClick={() => changeLanguage('en')}>
                            <img src="/assets/images/icons/ingles-icono.png" alt='bandera estados unidos'></img>
                            <span>English</span>
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default LanguageSwitcher;
