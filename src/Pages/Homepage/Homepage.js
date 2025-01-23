import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

import Header from '../../Components/Header/Header';
// import BlogTargets from '../../Components/BlogTargets';
// import Settings from '../../Components/Settings';
import Footer from '../../Components/Footer/Footer';

import './Homepage.css';

const Homepage = () => {
    const { t } = useTranslation('homepage');

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
                                    <p className="text">{t('resumeTexts.0.textOne')}</p>
                                </li>
                                <li>
                                    <p className="text">{t('resumeTexts.0.textTwo')}</p>
                                </li>
                            </ul>

                            <ul className="d-flex gap-10">
                                <li>
                                    <a href="" className="link link-1">
                                        <p>Saber más</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="link link-2">
                                        <p>Cotizar ahora</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="hero-target hero-target-2">
                            <div className="hero-target-video-container">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKHDEwDsYLHEsR-c9FEm-nRp6L9n6vW8I7g&s"></img>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>
        </>
    );
};

export default Homepage;