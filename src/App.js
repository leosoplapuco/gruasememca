// src/App.js
// import React from 'react';
import 'material-symbols/outlined.css';
import { Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';

import ChatBot from './Components/ChaBot/ChatBot';
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

            <ChatBot/>
        </>
    );
}

export default App;
