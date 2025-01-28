import './Header.css';

import DarkButton from '../DarkButton/DarkButton';
import Languages from '../Languages/Languages';

// import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Header(){
    const { t } = useTranslation('header');

    return(
        <header>
            <div className='header'>
                <div className='header-top-container'>
                    <div className='header-top'>
                        {/* <ul className='social-networks'>
                            <li>
                                <a href={t('socialNetworks.0.href')} title={t('socialNetworks.0.title')} target='_blank'>
                                    <img src="https://gruasememca.vercel.app/assets/images/icons/social-networks/facebook.svg" alt={t('socialNetworks.0.title')} width={16} height={16} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/gruasememcasac08" title="Nuestro perfil de Instagram" target='_blank'>
                                    <img src="https://gruasememca.vercel.app/assets/images/icons/social-networks/instagram.svg" alt={t('socialNetworks.0.title')} width={16} height={16} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/gruasememcasac08" title="Nuestro canal de YouTube" target='_blank'>
                                    <img src="https://gruasememca.vercel.app/assets/images/icons/social-networks/youtube.svg" alt={t('socialNetworks.0.title')} width={16} height={16} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/gruasememcasac08" title="Nuestro perfil en LinkedIn" target='_blank'>
                                    <img src="https://gruasememca.vercel.app/assets/images/icons/social-networks/linkedin.svg" alt={t('socialNetworks.0.title')} width={16} height={16} />
                                </a>
                            </li>
                        </ul> */}

                        <ul className="social-networks">
                            {t('socialNetworks', { returnObjects: true }).map((socialNetwork) => (
                                <li key={socialNetwork.id}>
                                    <a href={socialNetwork.href}>
                                        <img src={socialNetwork.imgSrc} width={20} height={20} />
                                    </a>
                                </li>
                            ))}
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
                        <a href='/' title='' className='header-logo'>
                            <p>Grúas<span>Ememca</span></p>
                        </a>

                        <nav className='menu-container'>
                            <ul className="menu">
                                {t('menuLinks', { returnObjects: true }).map((menuLink) => (
                                    <li key={menuLink.id}>
                                        {menuLink.id === 2 || menuLink.id === 3 ? (
                                            <button className={`menu-link menu-link-${menuLink.id}`}>
                                                <h2>{menuLink.h2}</h2>
                                                <span className="material-icons">keyboard_arrow_down</span>
                                            </button>
                                        ) : (
                                            <a href={menuLink.href} className={`menu-link menu-link-${menuLink.id}`}>
                                                <h2>{menuLink.h2}</h2>
                                            </a>
                                        )}
                                        {menuLink.subMenu && (
                                            <div className="sub-menu-container">
                                                <ul className="sub-menu">
                                                    {menuLink.subMenu.map((subLink) => (
                                                        <li key={subLink.id}>
                                                            <p>{subLink.title}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
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
