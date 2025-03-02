import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import DarkButton from '../DarkButton/DarkButton';
import Languages from '../Languages/Languages';
import './Header.css';

function Header() {
    const { t } = useTranslation('header');
    const [activeMenu, setActiveMenu] = useState(null);
    const [menuActive, setMenuActive] = useState(false);

    const handleMenuClick = (id) => {
        setActiveMenu(activeMenu === id ? null : id);
    };

    const handleMenuButtonClick = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header>
            <div className='header'>
                <div className='header-top-container'>
                    <div className='header-top'>
                        <ul className="social-networks">
                            {t('socialNetworks', { returnObjects: true }).map((socialNetwork) => (
                                <li key={socialNetwork.id}>
                                    <a href={socialNetwork.href} className='social-network' title={socialNetwork.title}>
                                        <img src={socialNetwork.imgSrc} width={20} height={20} alt={socialNetwork.imgAlt} />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <ul className='header-contact'>
                            <li>
                                <a href={t('headerTopContactLinks.1.href')} title={t('headerTopContactLinks.1.title')}>
                                    <span className="material-icons">mail</span>
                                    <p>{t('headerTopContactLinks.1.text')}</p>
                                </a>
                            </li>
                        </ul>

                        <p className='color-white'>|</p>

                        <Languages />

                        <p className='color-white'>|</p>

                        <DarkButton />
                    </div>
                </div>

                <div className='header-bottom-container'>
                    <div className='header-bottom'>
                        <a href='/' className='header-logo'>
                            <p>Grúas<span>Ememca</span></p>
                        </a>

                        <nav className={`menu-container ${menuActive ? 'active' : ''}`}>
                            <ul className="menu">
                                {t("menuLinks", { returnObjects: true }).map((menuLink) => (
                                    <li key={menuLink.id} className="menu-item">
                                        {menuLink.subMenu ? (
                                            <>
                                                <button 
                                                    className={`menu-link menu-link-${menuLink.id} ${activeMenu === menuLink.id ? 'active' : ''}`} 
                                                    onClick={() => handleMenuClick(menuLink.id)}
                                                >
                                                    <h2>{menuLink.h2}</h2>
                                                    <span className="material-icons">keyboard_arrow_down</span>
                                                </button>

                                                <div className={`sub-menu-container sub-menu-container-${menuLink.id} ${activeMenu === menuLink.id ? 'active' : ''}`}>
                                                    {menuLink.subMenu.map((sub) => (
                                                        <div key={sub.id} className="sub-menu">
                                                            <div className="sub-menu-header">
                                                                <p className="sub-menu-title">{sub.title}</p>
                                                                <p className="sub-menu-resume text">{sub.resume}</p>
                                                            </div>
                                                            <ul className="sub-menu-links">
                                                                {sub.links.map((link) => (
                                                                    <li key={link.id} className="sub-menu-item">
                                                                        <a href={link.href} className="sub-menu-link">
                                                                            <img src={link.imgSrc} alt={link.imgAlt} />
                                                                            <h3>{link.h3}</h3>
                                                                            <p className='text'>{link.text}</p>
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <a href={menuLink.href} className={`menu-link menu-link-${menuLink.id}`}>
                                                <h2>{menuLink.h2}</h2>
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <ul className='d-flex gap-10'>
                            <li>
                                <a href={t('headerTopContactLinks.2.href')} className='call-button call-button-2' title={t('headerTopContactLinks.0.text')}>
                                    <span className="material-icons">mail</span>
                                    <p>{t('headerTopContactLinks.2.text')}</p>
                                </a>
                            </li>

                            <li>
                                <a href={t('headerTopContactLinks.0.href')} className='call-button call-button-1 margin-left' title={t('headerTopContactLinks.0.text')}>
                                    <span className="material-icons">call</span>
                                    <p>{t('headerTopContactLinks.0.text')}</p>
                                </a>
                            </li>
                        </ul>

                        <button type='button' className={`menu-button ${menuActive ? 'active' : ''}`} onClick={handleMenuButtonClick}>
                            <span className="material-icons">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
