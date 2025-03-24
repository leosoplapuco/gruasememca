import { Helmet } from 'react-helmet-async';

import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

function Izaje(){
    return(
        <>
            <Helmet>
                <title>Izaje | Grúas Ememca</title>
                <meta name="description" content="Bienvenido a grúas ememca"/>
            </Helmet>

            <Header/>

            <main>
                <p>Izaje</p>
            </main>

            <Footer/>
        </>
    );
}

export default Izaje;
