import { Helmet } from 'react-helmet-async';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './Services.css'

function Homepage(){
    return(
        <>
            <Helmet>
                <title>Servicios | Grúas Ememca SAC</title>
                <meta name="description" content="Bienvenido a grúas ememca"/>
            </Helmet>

            <Header/>

            <main>
                <div className='block-container'>
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h2 className='block-title'>Nuestros servicios</h2>
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default Homepage;
