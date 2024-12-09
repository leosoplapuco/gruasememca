import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';

function LanguageRedirector(){
    const navigate = useNavigate();
    const currentLanguage = i18next.language;

    useEffect(() => {
        if (currentLanguage === 'en') {
            navigate('/en/', { replace: true });
        } else {
            navigate('/es/', { replace: true });
        }
    }, [currentLanguage, navigate]);

    return null;
}

export default LanguageRedirector;