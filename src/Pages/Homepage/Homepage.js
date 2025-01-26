// import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import React, { useState } from "react";

import Header from '../../Components/Header/Header';
// import BlogTargets from '../../Components/BlogTargets';
// import Settings from '../../Components/Settings';
import Footer from '../../Components/Footer/Footer';

import './Homepage.css';

const Homepage = () => {
    const { t } = useTranslation('homepage');

    const [isActive, setIsActive] = useState(false);

    const handlePlayButtonClick = () => {
        setIsActive(true);
    };
  
    const handleCloseButtonClick = () => {
        setIsActive(false);
    };

    return(
        <>
            <Helmet>
                <title>{t('head.0.title')}</title>
                <link rel="canonical" href={t('head.0.cannonical')}></link>
                <meta name="description" content={t('head.0.description')} />

                <meta property="og:title" content={t('head.0.ogTitle')} />
                <meta property="og:description" content={t('head.0.ogDescription')} />
                <meta property="og:image" content={t('head.0.ogImage')} />
                <meta property="og:url" content={t('head.0.ogUrl')} />

                <meta name="twitter:card" content={t('head.0.twitterCard')} />
                <meta name="twitter:title" content={t('head.0.twitterTitle')} />
                <meta name="twitter:description" content={t('head.0.twitterDescription')} />
                <meta name="twitter:image" content={t('head.0.twitterImage')} />
            </Helmet>

            <Header/>

            <main>
                <div className="hero-container">
                    <section className="hero-content">
                        <div className="hero-target hero-target-1">
                            <p className="hero-target-welcome">{t('welcome.0.text')}</p>
                            <h1>{t('h1.0.spanOne')} <span>{t('h1.0.spanTwo')}</span></h1>

                            <ul className="list-simple hero-resumes">
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className="text">{t('resumeTexts.0.textOne')}</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className="text">{t('resumeTexts.0.textTwo')}</p>
                                </li>
                            </ul>

                            <ul className="d-flex hero-links">
                                <li>
                                    <a href="" className="link link-1">
                                        <p>{t('heroLinks.0.linkOne')}</p>
                                        <span className="material-icons">arrow_forward</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="link link-2">
                                        <span className="material-icons">phone_in_talk</span>
                                        <p>{t('heroLinks.0.linkTwo')}</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="hero-target hero-target-2">
                            <div className="target-video target-video-1">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKHDEwDsYLHEsR-c9FEm-nRp6L9n6vW8I7g&s"></img>

                                <button type="button" className="target-video-button target-video-button-1" onClick={handlePlayButtonClick}>
                                    <span className="material-icons">play_arrow</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                <div className={`hero-target-container ${isActive ? "active" : ""}`}>
                    <div className="hero-target-content">
                        <button type="button" onClick={handleCloseButtonClick} className="margin-left">
                            <span className="material-icons text">close</span>
                        </button>

                        <iframe src="https://www.youtube.com/embed/2lXYBChl3Lc?si=RYOaJC2SSlpOYEfF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        
                        <p className="text">{t('targetVideo.0.description')}</p>

                        <a className="link link-2 margin-left" href={t('targetVideo.0.linkHref')} title={t('targetVideo.0.linkText')}>
                            <p>{t('targetVideo.0.linkText')}</p>
                            <span class="material-icons">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
};

export default Homepage;