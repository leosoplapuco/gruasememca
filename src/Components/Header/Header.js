import { useState } from 'react';

import GlobalVariables from '../GlobalVariables.json';

import './Header.css';

function Header() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = (menu) => {
        setActiveMenu(prevMenu => (prevMenu === menu ? null : menu));
    };

    const toggleMobileMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <header>
                <div className='header-top-container'>
                    <div className='header-top'>
                        <ul className='social-networks'>
                            <li>
                                <a href='https://www.facebook.com/gruasememcasac08' className='social-network social-network-1'>
                                    <p>Facebook</p>
                                </a>
                            </li>
                            <span className='color-white'>|</span>
                            <li>
                                <a href='https://www.instagram.com/p/DCHT86TOPZc/' className='social-network social-network-2'>
                                    <p>Instagram</p>
                                </a>
                            </li>
                            <span className='color-white'>|</span>
                            <li>
                                <a href='https://www.youtube.com/@gruasememcasac552' className='social-network social-network-3'>
                                    <p>YouTube</p>
                                </a>
                            </li>
                        </ul>
                        <div className='header-top-contact'>
                            <a href={GlobalVariables.mail_1}>
                                <span className="material-icons">mail</span>
                                <p>{GlobalVariables.mail_1_text}</p>
                            </a>

                            <p className='color-white'>|</p>

                            <a href={GlobalVariables.mail_2}>
                                <span className="material-icons">mail</span>
                                <p>{GlobalVariables.mail_2_text}</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='header-bottom-container'>
                    <div className='header-bottom'>
                        <a href="/" className='header-logo'>
                            <h2>Grúas <b>Ememca</b></h2>
                        </a>

                        <nav className={`menu-container ${isMenuOpen ? 'active' : ''}`}>
                            <ul className='menu'>
                                <li>
                                    <a href='/' className='menu-link menu-link-1'>
                                        <h2>Inicio</h2>
                                    </a>
                                </li>
                                <li>
                                    <button type='button' className={`menu-link menu-link-2 ${activeMenu === 'menu2' ? 'active' : ''}`} onClick={() => handleToggleMenu('menu2')}>
                                        <h2>Servicios</h2>
                                        <span className="material-icons">keyboard_arrow_down</span>
                                    </button>
                                    <div className={`sub-menu sub-menu-1 ${activeMenu === 'menu2' ? 'active' : ''}`}>
                                        <div className='sub-menu-top d-flex-center-center'>
                                            <p className='sub-menu-target-title'>Nuestros servicios</p>
                                            <button type='button' className='sub-menu-close' onClick={() => handleToggleMenu(null)}>
                                                <span className="material-icons">close</span>
                                            </button>
                                        </div>

                                        <div className='sub-menu-target sub-menu-target-1'>
                                            <p className='text-title'>Lorem Ipsum is simply ap into electronic typesetting, remaining essentially unchanged</p>
                                            <ul className='list-simple'>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                                                </li>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is ever since the essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <ul className='sub-menu-target sub-menu-target-2'>
                                            <li>
                                                <a href='/servicios/alquiler-de-gruas-telescopicas'>
                                                    <img src="/assets/Img/icons/grua.png" alt="" className='' />
                                                    <h3>Alquiler de grúas telescópicas</h3>
                                                    <ul className='list-simple'>
                                                        <li>
                                                            <span className="material-icons">check</span>
                                                            <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                                        </li>
                                                    </ul>
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/servicios/izaje'>
                                                    <img src="/assets/Img/icons/izaje.png" alt="" className='' />
                                                    <h3>Izaje</h3>
                                                    <ul className='list-simple'>
                                                        <li>
                                                            <span className="material-icons">check</span>
                                                            <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                                        </li>
                                                    </ul>
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/servicios/montaje-y-desmontaje'>
                                                    <img src="/assets/Img/icons/montaje.png" alt="" className='' />
                                                    <h3>Montaje y desmontaje</h3>
                                                    <ul className='list-simple'>
                                                        <li>
                                                            <span className="material-icons">check</span>
                                                            <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                                        </li>
                                                    </ul>
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/servicios/eliminacion-de-tierra'>
                                                    <img src="/assets/Img/icons/eliminacion.png" alt="" className='' />
                                                    <h3>Eliminación de tierra</h3>
                                                    <ul className='list-simple'>
                                                        <li>
                                                            <span className="material-icons">check</span>
                                                            <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                                        </li>
                                                    </ul>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <button type='button' className={`menu-link menu-link-3 ${activeMenu === 'menu3' ? 'active' : ''}`} onClick={() => handleToggleMenu('menu3')}>
                                        <h2>Nosotros</h2>
                                        <span className="material-icons">keyboard_arrow_down</span>
                                    </button>
                                    <div className={`sub-menu sub-menu-2 ${activeMenu === 'menu3' ? 'active' : ''}`}>
                                        <div className='sub-menu-top d-flex-center-center'>
                                            <p className='sub-menu-target-title'>Sobre nosotros</p>
                                            <button type='button' className='sub-menu-close' onClick={() => handleToggleMenu(null)}>
                                                <span className="material-icons">close</span>
                                            </button>
                                        </div>

                                        <div className='sub-menu-target sub-menu-target-1'>
                                             <p className='text-title'>Lorem Ipsum is simply ap into electronic typesetting, remaining essentially unchanged</p>

                                            <ul className='list-simple'>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                                                </li>
                                                <li>
                                                    <span className="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is ever since the essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                                                </li>
                                            </ul>
                                         </div>
                                         <ul className='sub-menu-target sub-menu-target-2'>
                                             <li>
                                                <a href='/nosotros/'>
                                                    <div className='d-flex-center-left'>
                                                        <img src="/assets/Img/icons/grupo.png" alt="" className='' />
                                                        <h3>¿Quienes somos?</h3>
                                                    </div>
                                                    <ul className='list-simple'>
                                                        <li>
                                                            <span className="material-icons">check</span>
                                                            <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                                        </li>
                                                    </ul>
                                                 </a>
                                            </li>
                                            <li>
                                                <a href='/maquinaria/'>
                                                    <img src="/assets/Img/icons/grua.png" alt="" className='' />
                                                    <h3>Nuestra maquinaria</h3>
                                                    <ul className='list-simple'>
                                                       <li>
                                                            <span className="material-icons">check</span>
                                                            <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                                        </li>
                                                    </ul>
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/nosotros/certificaciones'>
                                                    <img src="/assets/Img/icons/certificados.png" alt="" className='' />
                                                    <h3>Certificaciones</h3>
                                                    <ul className='list-simple'>
                                                        <li>
                                                            <span className="material-icons">check</span>
                                                            <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                                        </li>
                                                    </ul>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href='/maquinaria/' className='menu-link menu-link-4'>
                                        <h2>Maquinaria</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href='/contacto' className='menu-link menu-link-5'>
                                        <h2>Contacto</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://blog.gruasememca.com' className='menu-link menu-link-6'>
                                        <h2>Blog</h2>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <ul className='header-bottom-links d-flex gap-10'>
                            <li>
                                <a href="/contacto" className='button-link button-link-2'>
                                    <span className="material-icons">mail</span>
                                    <p className='button-link-text'>Contáctanos</p>
                                </a>
                            </li>
                            <li>
                                <a href="tel: +51998877665" className='button-link button-link-1'>
                                    <span className="material-icons">phone_in_talk</span>
                                    <p className='button-link-text'>Llamar ahora</p>
                                </a>
                            </li>
                            <button className='menu-icon' onClick={toggleMobileMenu}>
                                <span className="material-icons">menu</span>
                                <span className="material-icons">close</span>
                            </button>
                        </ul>
                    </div>
                </div>
            </header>

            <div className={`header-layer ${activeMenu || isMenuOpen ? 'active' : ''}`}></div>
        </>
    );
}

export default Header;
