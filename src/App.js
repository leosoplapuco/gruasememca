// src/App.js
// import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
// import About from './components/About';
// import NotFound from './components/NotFound';

function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* Ruta comodín para páginas no encontradas */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </>
    );
}


export default App;
