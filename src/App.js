import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './i18n';

import Home from './Pages/Homepage/Homepage';

function App(){
    const { i18n } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath.startsWith('/en/')){
            i18n.changeLanguage('en');
        } else if (currentPath.startsWith('/es/')){
            i18n.changeLanguage('es');
        }
    }, [location, i18n]);

    return(
        <>
            <Routes>
                <Route path="/" element={<Navigate replace to="/es/" />}/>
                <Route path="/es/" element={<Home/>}/>
                <Route path="/en/" element={<Home/>}/>
            </Routes>
        </>
    );
}

export default function AppWrapper(){
    return(
        <Router>
            <App/>
        </Router>
    );
}