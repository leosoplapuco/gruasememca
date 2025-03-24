import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import GlobalVariables from '../../Components/GlobalVariables.json';

import Header from '../../Components/Header/Header';
import BlogTargets from '../../Components/BlogTargets/BlogTargets';
import Machinery from '../../Components/Machinery/Machinery';
import Map from '../../Components/Map/Map';
import Footer from '../../Components/Footer/Footer';

import './Homepage.css';

const Homepage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const timelineRef = useRef(null);

    const scrollToStart = () => {
        if (timelineRef.current) {
            timelineRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const scrollToEnd = () => {
        if (timelineRef.current) {
            timelineRef.current.scrollTo({ top: timelineRef.current.scrollHeight, behavior: "smooth" });
        }
    };

    return(
        <>
            <Helmet>
                <title>Alquiler de grúas telescópicas | Grúas Ememca SAC</title>
                <meta name="description" content="Bienvenido a grúas ememca"/>
            </Helmet>

            <Header/>

            <main>
                <section className='hero-container'>
                    <div className='hero-content'>
                        <div className='hero-content-target hero-content-target-1'>
                            <p className='welcome'>Bienvenidos a Grúas Ememca</p>
                            <h1>Alquiler de <span>grúas telescópicas</span></h1>

                            <ul className='list-simple'>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                                </li>
                            </ul>

                            <ul className='d-flex gap-10 homepage-hero-buttons'>
                                <li>
                                    <a href='/nosotros/' className='button-link button-link-2'>
                                        <span className="material-icons">groups</span>
                                        <p className='button-link-text'>Sobre nosotros</p>
                                    </a>
                                </li>
                                <li>
                                    <a href={GlobalVariables.phone_1} className='button-link button-link-1'>
                                        <span className="material-icons">phone_in_talk</span>
                                        <p className='button-link-text'>Llamar ahora</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='hero-content-target hero-content-target-2'>
                            <div className='hero-content-target-img'>
                                <img src="https://www.gruasememca.com/media/img/gallery-5.webp" alt="Alquiler de grúas telescópicas | Grúas Ememca" />

                                <button className='hero-content-target-button'>
                                    <span className="material-icons">play_arrow</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='video-popup-container'>
                    <div className='video-popup'>
                        <button type='button' className='margin-left'>
                            <span className="material-icons">close</span>
                        </button>

                        <video controls>
                            <source src="https://www.gruasememca.com/media/videos/video-1.webm" type="video/webm" />
                        </video>

                        <p className='text'>Breve descripción del video...</p>

                        <a href="/" title="/" className='button-link button-link-1 margin-left'>
                            <p className='button-link-text'>Saber más</p>
                            <span className="material-icons">arrow_forward</span>
                        </a>
                    </div>
                </div>

                <BlogTargets/>

                <div className='block-container block-container-homepage-services'>
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h3 className='block-title'>Servicios</h3>
                        </div>

                        <div className='homepage-services'>
                            <div className='homepage-services-target homepage-services-target-1'>
                                <p className='homepage-services-target-title'>Más de <b>15 años</b> de experiencia nos respaldan... lorem ipsum lorem ipsum</p>
                                <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                                <ul className='d-flex margin-right gap-10 homepage-services-buttons'>
                                    <li>
                                        <a href={GlobalVariables.phone_1} title="" className='button-link button-link-1'>
                                            <span className="material-icons">phone_in_talk</span>
                                            <p className='button-link-text'>Llamar ahora</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/servicios/" title="" className='button-link button-link-3'>
                                            <p className='button-link-text'>Ver servicios</p>
                                            <span className="material-icons">north_east</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='homepage-services-target homepage-services-target-2'>
                                <ul className='faqs'>
                                    <li className={`faq faq-1 ${activeIndex === 1 ? 'active' : ''}`}>
                                        <div className='faq-title' onClick={() => handleClick(1)}>
                                            <p>Alquiler de grúas telescópicas</p>
                                            <span className="material-icons">keyboard_arrow_down</span>
                                        </div>
                                        <div className='faq-content'>
                                            <ul className='list-simple'>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum has been the industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem dummy text ever since the 1500s, when It has survived not only five centuries.</p>
                                                </li>
                                            </ul>

                                            <a href='/servicios/alquiler-de-gruas/' title='' className='button-link button-link-1 margin-left'>
                                                <p className='button-link-text'>Cotizar ahora</p>
                                                <span className="material-icons">north_east</span>
                                            </a>
                                        </div>
                                    </li>

                                    <li className={`faq faq-2 ${activeIndex === 2 ? 'active' : ''}`}>
                                        <div className='faq-title' onClick={() => handleClick(2)}>
                                            <p>Izaje</p>
                                            <span className="material-icons">keyboard_arrow_down</span>
                                        </div>
                                        <div className='faq-content'>
                                            <ul className='list-simple'>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum has been the industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem dummy text ever since the 1500s, when It has survived not only five centuries.</p>
                                                </li>
                                            </ul>

                                            <a href='/servicios/izaje/' title='' className='button-link button-link-1 margin-left'>
                                                <p className='button-link-text'>Cotizar ahora</p>
                                                <span className="material-icons">north_east</span>
                                            </a>
                                        </div>
                                    </li>

                                    <li className={`faq faq-3 ${activeIndex === 3 ? 'active' : ''}`}>
                                        <div className='faq-title' onClick={() => handleClick(3)}>
                                            <p>Montaje y desmontaje</p>
                                            <span className="material-icons">keyboard_arrow_down</span>
                                        </div>
                                        <div className='faq-content'>
                                            <ul className='list-simple'>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum has been the industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem dummy text ever since the 1500s, when It has survived not only five centuries.</p>
                                                </li>
                                            </ul>

                                            <a href='/servicios/montaje-y-desmontaje/' title='' className='button-link button-link-1 margin-left'>
                                                <p className='button-link-text'>Cotizar ahora</p>
                                                <span className="material-icons">north_east</span>
                                            </a>
                                        </div>
                                    </li>

                                    <li className={`faq faq-4 ${activeIndex === 4 ? 'active' : ''}`}>
                                        <div className='faq-title' onClick={() => handleClick(4)}>
                                            <p>Eliminación de tierra</p>
                                            <span className="material-icons">keyboard_arrow_down</span>
                                        </div>
                                        <div className='faq-content'>
                                            <ul className='list-simple'>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum has been the industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem dummy text ever since the 1500s, when It has survived not only five centuries.</p>
                                                </li>
                                            </ul>

                                            <a href='/servicios/eliminacion-de-tierra/' title='' className='button-link button-link-1 margin-left'>
                                                <p className='button-link-text'>Cotizar ahora</p>
                                                <span className="material-icons">north_east</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="block-container about-us-block-container">
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h3 className='block-title'>Sobre nosotros</h3>
                        </div>

                        <div className='about-us-targets'>
                            <div className='about-us-target about-us-target-1 d-flex-column gap-20'>

                                <ul className='list-simple'>
                                    <li>
                                        <span className="material-icons">check</span>
                                        <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).</p>
                                    </li>
                                    <li>
                                        <span className="material-icons">check</span>
                                        <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).</p>
                                    </li>
                                </ul>
                            </div>

                            <div className='about-us-target about-us-target-2'>
                                <div className='timeline-container'>
                                    <div className='timeline-content' ref={timelineRef}>
                                        <div className='timeline-content-targets'>
                                            <div className='timeline-target'>
                                                <div className='timeline-target-content'>
                                                    <p className='timeline-target-title'>Título 1</p>
                                                    <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                                                </div>

                                                <p className='text'>2000</p>

                                                <img src="https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg" alt="" />
                                            </div>

                                            <div className='timeline-target'>
                                                <img src="https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg" alt="" />

                                                <p className='text'>2001</p>

                                                <div className='timeline-target-content'>
                                                    <p className='timeline-target-title'>Título 2</p>
                                                    <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                                                </div>
                                            </div>

                                            <div className='timeline-target'>
                                                <div className='timeline-target-content'>
                                                    <p className='timeline-target-title'>Título 3</p>
                                                    <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                                                </div>

                                                <p className='text'>2002</p>

                                                <img src="https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg" alt="" />
                                            </div>

                                            <div className='timeline-target'>
                                                <img src="https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg" alt="" />

                                                <p className='text'>2003</p>

                                                <div className='timeline-target-content'>
                                                    <p className='timeline-target-title'>Título 4</p>
                                                    <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='timeline-center-line-container'>
                                            <div className='timeline-center-line'>
                                                <div className='timeline-node timeline-node-1'></div>
                                                <div className='timeline-node timeline-node-2'></div>
                                                <div className='timeline-node timeline-node-3'></div>
                                                <div className='timeline-node timeline-node-4'></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='timeline-butons'>
                                        <button className='timeline-button timeline-button-1' onClick={scrollToStart}>
                                            <span className="material-icons">keyboard_arrow_up</span>
                                        </button>

                                        <div className='timeline-scrollbar'>
                                            <div className='timeline-scrollbar-thumb'></div>
                                        </div>

                                        <button className='timeline-button timeline-button-2' onClick={scrollToEnd}>
                                            <span className="material-icons">keyboard_arrow_down</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Machinery/>

                <Map/>

                <div className='block-container'>
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h2 className='block-title'>Trabajemos juntos</h2>
                        </div>

                        <div className='homepage-contact-form'>
                            <form action="https://formspree.io/f/maygzoze" method='post' id='homepage-contact-form'>
                                <fieldset>
                                    <legend className='text'>Nombre completo:</legend>
                                    <input type='text' placeholder="Nombre completo" name="Nombre completo"></input>
                                </fieldset>

                                <fieldset>
                                    <legend className='text'>Empresa:</legend>
                                    <input type='text' placeholder="Empresa" name="Empresa"></input>
                                </fieldset>

                                <fieldset>
                                    <select>
                                        <option name="No seleccionó">Servicio de interés:</option>
                                        <option value="Alquiler de grúa telescópica">Alquiler de grúa telescópica</option>
                                        <option value="Izaje">Izaje</option>
                                        <option value="Montaje y desmontaje">Montaje y desmontaje</option>
                                        <option value="Elimincación de tierra">Eliminación de tierra</option>
                                    </select>
                                </fieldset>

                                <fieldset>
                                    <legend className='text'>Describe lo que necesitas</legend>
                                    <textarea placeholder='Describe lo que necesitas' name='Mensaje'></textarea>
                                </fieldset>

                                <button type='submit' className='button-link button-link-1 margin-left'>
                                    <p className='button-link-text'>Enviar formulario</p>
                                    <span className="material-icons">send</span>
                                </button>
                            </form>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsn6aHrSIiH9CHAA_ZW66t3OA8XaAX-ua5Jg&s" alt=""/>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default Homepage;
