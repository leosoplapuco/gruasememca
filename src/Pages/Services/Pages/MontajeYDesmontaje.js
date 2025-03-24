import { Helmet } from 'react-helmet-async';

import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

function MontajeYDesmontaje(){
    return(
        <>
            <Helmet>
                <title>Montaje y desmontaje | Grúas Ememca</title>
                <meta name="description" content="Bienvenido a grúas ememca"/>
            </Helmet>

            <Header/>

            <main>
                <p>Montaje y desmontaje</p>
            </main>

            <Footer/>
        </>
    );
}

export default MontajeYDesmontaje;
