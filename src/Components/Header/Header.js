import { useTranslation } from 'react-i18next';

import DarkButton from '../DarkButton/DarkButton';
import Languages from '../Languages/Languages';

// import GlobalVariables from '../GlobalVariables.json';

import './Header.css';

function Header() {
    const { t } = useTranslation('header');

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

                        {/* <p>{GlobalVariables.NumberPhoneOne}</p> */}
                    </div>
                </div>

                <div className='header-bottom-container'>
                    <div className='header-bottom'>
                        <a href='/' title='' className='header-logo'>
                            <p>Grúas<span>Ememca</span></p>
                        </a>

                        <nav className='menu-container'>
                            <ul className="menu">
                                {t("menuLinks", { returnObjects: true }).map((menuLink) => (
                                    <li key={menuLink.id} className="menu-item">
                                        {menuLink.subMenu ? (
                                            <>
                                                <button className={`menu-link menu-link-${menuLink.id}`}>
                                                    <h2>{menuLink.h2}</h2>
                                                    <span className="material-icons">keyboard_arrow_down</span>
                                                </button>
                                                <div className="sub-menu-container">
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