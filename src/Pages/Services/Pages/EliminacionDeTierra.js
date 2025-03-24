import { Helmet } from 'react-helmet-async';

import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

function EliminacionDeTierra(){
    return(
        <>
            <Helmet>
                <title>Eliminación de tierra | Grúas Ememca</title>
                <meta name="description" content="Bienvenido a grúas ememca"/>
            </Helmet>

            <Header/>

            <main>
                <p>Eliminación de tierra</p>
            </main>

            <Footer/>
        </>
    );
}

export default EliminacionDeTierra;
