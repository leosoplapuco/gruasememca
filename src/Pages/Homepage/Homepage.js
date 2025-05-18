import { Helmet } from 'react-helmet-async';

import Header from '../../Components/Header/Header';
import Background from '../../Components/Background/Background';
import InfoTargets from './Components/InfoTargets/InfoTargets';
import AboutUs from './Components/AboutUs/AboutUs';

import './Homepage.css';

function Homepage(){
    return(
        <>
            <Helmet>
                <title>Mi Proyecto — Inicio</title>
                <meta name="description" content="Bienvenido a la página principal de mi proyecto React." />
            </Helmet>

            <Header/>

            <Background/>

            <div className='page-hero-container'>
                <section className='page-hero-content'>
                    <div className='page-hero-content-target page-hero-content-target-1'>
                        <div className='d-flex-column'>
                            <h1 className='font-anton'>Alquiler de grúas</h1>
                            <h2 className='font-anton'>telescópicas</h2>
                        </div>

                        <p className='color-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    
                        <ul className='list-buttons'>
                            <li>
                                <a href='/' title='' className='button-link button-link-2'>
                                    <span className="material-symbols-outlined">grid_3x3</span>
                                    <p className='button-link-text'>Cotizar servicio</p>
                                </a>
                            </li>
                            <li>
                                <a href='/' title='' className='button-link button-link-1'>
                                    <span className="material-symbols-outlined">call</span>
                                    <p className='button-link-text'>Llamar ahora</p>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='page-hero-content-target page-hero-content-target-2'>
                        <img src="/assets/media/images/homepage/grua-principal.png"  alt=""/>
                    </div>
                </section>
            </div>

            <main>
                <InfoTargets/>

                <AboutUs/>

                <div className='block-container homepage-first-block-container'>
                    <section className='block-content'>
                        <p>leosoplapuco desarrollando este sitio web</p>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Homepage;
