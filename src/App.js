import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import CustomCursor from "./Components/customCursor/customCursor";

import Home from './Pages/Home';
import Services from './Pages/Services';

import i18next from 'i18next';
import './i18n';

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

                <Route path="/es/servicios/" element={<Services/>}/>
                <Route path="/en/services/" element={<Services/>}/>
                
                <Route path="/es/servicios/alquiler-de-gruas-telescopicas" element={<Services/>}/>
                <Route path="/en/services/telescopic-crane-rental" element={<Services/>}/>
            </Routes>

            <CustomCursor />
        </>
    );
}

export default function AppWrapper(){
    return(
        <Router>
            <App />
        </Router>
    );
}