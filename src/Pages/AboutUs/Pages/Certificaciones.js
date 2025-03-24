import { Helmet } from 'react-helmet-async';

import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

function Certificaciones(){
    return(
        <>
            <Helmet>
                <title>Certificaciones | Grúas Ememca</title>
                <meta name="description" content="Bienvenido a grúas ememca"/>
            </Helmet>

            <Header/>

            <main>
                <p>Certificaciones</p>
            </main>

            <Footer/>
        </>
    );
}

export default Certificaciones;
