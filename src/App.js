import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './i18n';

import Home from './Pages/Homepage/Homepage';
import Services from './Pages/Services/Page';
import AboutUs from './Pages/AboutUs/Page';

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

                <Route path="/es/servicios/izaje" element={<Services/>}/>
                <Route path="/en/services/lifting" element={<Services/>}/>

                <Route path="/es/servicios/montaje-y-desmontaje" element={<Services/>}/>
                <Route path="/en/services/assembly-and-disassembly" element={<Services/>}/>

                <Route path="/es/servicios/eliminacion-de-tierra" element={<Services/>}/>
                <Route path="/en/services/earth-removal" element={<Services/>}/>

                <Route path="/es/nosotros/" element={<AboutUs/>}/>
                <Route path="/en/about-us/" element={<AboutUs/>}/>
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