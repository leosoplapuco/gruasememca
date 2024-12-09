import i18next from 'i18next';
import { useNavigate, useLocation } from 'react-router-dom';

function LanguageSwitcher() {
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
                <p className='text'>Idioma:</p>

                <ul className='d-flex gap-10'>
                    <li>
                        <button type='button' className='language-button en' onClick={() => changeLanguage('es')}>
                            <img src="/assets/images/icons/espanol-icono.png"></img>
                            <p>Español</p>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='language-button es' onClick={() => changeLanguage('en')}>
                            <img src="/assets/images/icons/ingles-icono.png"></img>
                            <p>English</p>
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default LanguageSwitcher;
