import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Homepage from "./Pages/Homepage/Homepage";

import Services from "./Pages/Services/Services";
import AlquilerDeGruas from './Pages/Services/Pages/AlquilerDeGruas';
import Izaje from './Pages/Services/Pages/Izaje';
import MontajeYDesmontaje from './Pages/Services/Pages/MontajeYDesmontaje';
import EliminacionDeTierra from './Pages/Services/Pages/EliminacionDeTierra';

import AboutUs from "./Pages/AboutUs/AboutUs";
import Certificaciones from './Pages/AboutUs/Pages/Certificaciones'

import Machinery from "./Pages/Machinery/Machinery";

import Contact from "./Pages/Contact/Contact";

import Error404 from "./Pages/Error404/Error404";

function App(){
    return(
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>

                    <Route path="/servicios/" element={<Services/>}/>
                    <Route path="/servicios/alquiler-de-gruas-telescopicas/" element={<AlquilerDeGruas/>}/>
                    <Route path="/servicios/izaje/" element={<Izaje/>}/>
                    <Route path="/servicios/montaje-y-desmontaje/" element={<MontajeYDesmontaje/>}/>
                    <Route path="/servicios/eliminacion-de-tierra/" element={<EliminacionDeTierra/>}/>

                    <Route path="/nosotros/" element={<AboutUs/>}/>
                    <Route path="/nosotros/certificaciones/" element={<Certificaciones/>}/>

                    <Route path="/maquinaria/" element={<Machinery/>}/>

                    <Route path="/contacto/" element={<Contact/>}/>

                    <Route path="*" element={<Navigate to="/404"/>}/>
                    <Route path="/404" element={<Error404/>}/>
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
