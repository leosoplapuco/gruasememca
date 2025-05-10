import { Helmet } from 'react-helmet-async';

import Header from '../../Components/Header/Header';

function Homepage(){
    return(
        <>
            <Helmet>
                <title>Mi Proyecto — Inicio</title>
                <meta name="description" content="Bienvenido a la página principal de mi proyecto React." />
            </Helmet>

            <Header/>

            <main>
                <h1>Bienvenido a mi Homepage</h1>
                <p>Este es el contenido de la página principal.</p>
            </main>
        </>
    );
}

export default Homepage;