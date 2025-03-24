import { Helmet } from 'react-helmet-async';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './AboutUs.css';

function AboutUs(){
    return(
        <>
            <Helmet>
                <title>Nosotros | Grúas Ememca SAC</title>
                <meta name="description" content="Bienvenido a grúas ememca"/>
            </Helmet>

            <Header/>

            <main>
                <div className='block-container'>
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h2 className='block-title'>Sobre nosotros</h2>
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default AboutUs;
