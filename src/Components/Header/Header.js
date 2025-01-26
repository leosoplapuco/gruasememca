import './Header.css';

import DarkButton from '../DarkButton/DarkButton';
import Languages from '../Languages/Languages';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Header(){
    const { t } = useTranslation('header');

    // const [isActive, setIsActive] = useState(false);
    // const [activeMenu, setActiveMenu] = useState(null);
    // const [menuOpen, setMenuOpen] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 100) {
    //             setIsActive(true);
    //         } else {
    //             setIsActive(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const handleMenuClick = (menu) => {
    //     if (menu === 'menu-3') {
    //         document.querySelector('.menu-link-3').classList.add('active');
    //         document.querySelector('.sub-header-container-2').classList.add('active');

    //         document.querySelector('.menu-link-1').classList.remove('active');
    //         document.querySelector('.sub-header-container-1').classList.remove('active');
    //     } else if (menu === 'menu-1') {
    //         document.querySelector('.menu-link-1').classList.add('active');
    //         document.querySelector('.sub-header-container-1').classList.add('active');

    //         document.querySelector('.menu-link-3').classList.remove('active');
    //         document.querySelector('.sub-header-container-2').classList.remove('active');
    //     }

    //     setActiveMenu(menu === activeMenu ? null : menu);
    // };

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    return(
        <header>
            <div className='header'>
                <div className='header-top-container'>
                    <div className='header-top'>
                        <ul className='social-networks'>
                            <li>
                                <a href="https://www.facebook.com/gruasememcasac08" title="Nuestro perfil de Facebook" target='_blank'>
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/gruasememcasac08" title="Nuestro perfil de Instagram" target='_blank'>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/gruasememcasac08" title="Nuestro canal de YouTube" target='_blank'>
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/gruasememcasac08" title="Nuestro perfil en LinkedIn" target='_blank'>
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>

                        <ul className='header-contact'>
                            <li>
                                <a href={t('headerTopContactLinks.1.href')} title={t('headerTopContactLinks.1.title')}>
                                    <span className="material-icons icon-small">mail</span>
                                    <p className='font-small'>{t('headerTopContactLinks.1.text')}</p>
                                </a>
                            </li>
                        </ul>

                        <p className='color-white'>|</p>

                        <Languages/>

                        <p className='color-white'>|</p>

                        <DarkButton/>
                    </div>
                </div>

                <div className='header-bottom-container'>
                    <div className='header-bottom'>
                        <a href='' title='' className='header-logo'>
                            <p>Grúas<span>Ememca</span></p>
                        </a>

                        <nav className='menu-container'>
                            <ul className='menu'>
                                <li>
                                    <a href='' className='menu-link menu-link-1'>
                                        <h2>Inicio</h2>
                                    </a>
                                </li>
                                <li>
                                    <button type='button' className='menu-link menu-link-2'>
                                        <h2>Servicios</h2>
                                        <span className="material-icons">keyboard_arrow_down</span>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='menu-link menu-link-3'>
                                        <h2>Nosotros</h2>
                                        <span className="material-icons">keyboard_arrow_down</span>
                                    </button>
                                </li>
                                <li>
                                    <a href='' className='menu-link menu-link-4'>
                                        <h2>Maquinaria</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href='' className='menu-link menu-link-5'>
                                        <h2>Contacto</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href='' className='menu-link menu-link-6'>
                                        <h2>Blog</h2>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <a href='tel: +51954132098' className='call-button call-button-1' title={t('headerTopContactLinks.0.text')}>
                            <span className="material-icons">call</span>
                            <p>{t('headerTopContactLinks.0.text')}</p>
                        </a>

                        <button type='button' className='menu-button'>
                            <span className="material-icons">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
