import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation('header');

    const [isActive, setIsActive] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = (menu) => {
        if (menu === 'menu-3') {
            document.querySelector('.menu-link-3').classList.add('active');
            document.querySelector('.sub-header-container-2').classList.add('active');

            document.querySelector('.menu-link-1').classList.remove('active');
            document.querySelector('.sub-header-container-1').classList.remove('active');
        } else if (menu === 'menu-1') {
            document.querySelector('.menu-link-1').classList.add('active');
            document.querySelector('.sub-header-container-1').classList.add('active');

            document.querySelector('.menu-link-3').classList.remove('active');
            document.querySelector('.sub-header-container-2').classList.remove('active');
        }

        setActiveMenu(menu === activeMenu ? null : menu);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className={isActive ? 'active' : ''}>
                <div className="header">
                    <a href={t('logo.0.href')} className="header-logo">
                        <p>
                            Grúas <span>Ememca</span>
                        </p>
                    </a>

                    <nav className={`menu-container ${menuOpen ? 'active' : ''}`}>
                        {/* <button className='menu-close-icon' type='button'>
                            <span className="material-symbols-outlined">close</span>
                        </button> */}

                        <ul className="menu">
                            <li>
                                <button type="button" className={`menu-link menu-link-1 hover-target ${activeMenu === 'menu-1' ? 'active' : ''}`} onClick={() => handleMenuClick('menu-1')}>
                                    <span className="material-symbols-outlined menu-link-icon">{t('menuLinks.0.icon')}</span>
                                    <h2>{t('menuLinks.0.text')}</h2>
                                    <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                </button>

                                <div className={`sub-header-container sub-header-container-1 ${activeMenu === 'menu-1' ? 'active' : ''}`}>
                                    <div className='sub-header d-flex-column gap-10'>
                                        <p className='sub-header-title'>{t('menuLinks.0.subHeader.0.title')}</p>
                                        
                                        <div className="sub-header-content gap-20">
                                            <div className="d-flex-column gap-10">
                                                <p className='text'>{t('menuLinks.0.subHeader.0.text')}</p>
                                                
                                                <a href={t('menuLinks.0.subHeader.0.linkHref')} className='link-text link-text-1 margin-right hover-target'>
                                                    <p className="button-link-text">{t('menuLinks.0.subHeader.0.link')}</p>
                                                </a>
                                            </div>
                                            
                                            <div className='sub-header-content-list'>
                                                <ul>
                                                    {t("menuLinks.0.subHeader.1.links", { returnObjects: true }).map((item) => (
                                                        <li key={item.id}>
                                                            <a href={item.href} className='d-flex gap-10 hover-target hover-target'>
                                                                <div className='sub-header-img'>
                                                                    <img src={item.imgSrc} alt={item.imgAlt}></img>
                                                                </div>
                                                                <div className='d-flex-column'>
                                                                    <h3>{item.text}</h3>
                                                                    <p className="text">{item.description}</p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href={t('menuLinks.1.href')} className="menu-link menu-link-2 hover-target">
                                    <span className="material-symbols-outlined menu-link-icon">{t('menuLinks.1.icon')}</span>
                                    <h2>{t('menuLinks.1.text')}</h2>
                                </a>
                            </li>
                            <li>
                                <button type="button" className={`menu-link menu-link-3 hover-target ${activeMenu === 'menu-3' ? 'active' : ''}`} onClick={() => handleMenuClick('menu-3')}>
                                    <span className="material-symbols-outlined menu-link-icon">{t('menuLinks.2.icon')}</span>
                                    <h2>{t('menuLinks.2.text')}</h2>
                                    <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                </button>

                                <div className={`sub-header-container sub-header-container-2 ${activeMenu === 'menu-3' ? 'active' : ''}`}>
                                    <div className='sub-header d-flex-column gap-10'>
                                        <p className='sub-header-title'>{t('menuLinks.2.subHeader.0.title')}</p>
                                        
                                        <div className="sub-header-content gap-20">
                                            <div className="d-flex-column gap-10">
                                                <p className='text'>{t('menuLinks.2.subHeader.0.text')}</p>
                                                
                                                <a href={t('menuLinks.2.subHeader.0.linkHref')} className='link-text link-text-1 margin-right hover-target'>
                                                    <p className="button-link-text">{t('menuLinks.2.subHeader.0.link')}</p>
                                                </a>
                                            </div>
                                            
                                            <div className='sub-header-content-list'>
                                                <ul>
                                                    {t("menuLinks.2.subHeader.1.links", { returnObjects: true }).map((item) => (
                                                        <li key={item.id}>
                                                            <a href={item.href} className='d-flex gap-10 hover-target hover-target'>
                                                                <div className='sub-header-img'>
                                                                    <img src={item.imgSrc} alt={item.imgAlt}></img>
                                                                </div>
                                                                <div className='d-flex-column'>
                                                                    <h3>{item.text}</h3>
                                                                    <p className="text">{item.description}</p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href={t('menuLinks.3.href')} className="menu-link menu-link-4 hover-target">
                                    <span className="material-symbols-outlined menu-link-icon">{t('menuLinks.3.icon')}</span>
                                    <h2>{t('menuLinks.3.text')}</h2>
                                </a>
                            </li>
                            <li>
                                <a href={t('menuLinks.4.href')} className="menu-link menu-link-5 hover-target">
                                    <span className="material-symbols-outlined menu-link-icon">{t('menuLinks.4.icon')}</span>
                                    <h2>{t('menuLinks.4.text')}</h2>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <ul>
                        <li>
                            <a href={t('headerTopContactLinks.0.href')} className="button-link button-link-1 call-button hover-target">
                                <span className="material-symbols-outlined">phone_in_talk</span>
                                <p className="button-link-text">{t('headerTopContactLinks.0.text')}</p>
                            </a>
                        </li>
                    </ul>

                    <button className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span className="material-symbols-outlined hamburguer">menu</span>
                        <span className="material-symbols-outlined close">close</span>
                    </button>
                </div>
            </header>

            <div className='header-layer'></div>
        </>
    );
}

export default Header;
