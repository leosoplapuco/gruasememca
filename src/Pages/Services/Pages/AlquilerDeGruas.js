import { Helmet } from 'react-helmet-async';

import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

function AlquilerDeGruas(){
    return(
        <>
            <Helmet>
                <title>Alquiler de grúas telescópicas | Grúas Ememca</title>
                <meta name="description" content="Bienvenido a grúas ememca"/>
            </Helmet>

            <Header/>

            <main>
                <p>Alquiler de grúas telescópicas</p>
            </main>

            <Footer/>
        </>
    );
}

export default AlquilerDeGruas;
