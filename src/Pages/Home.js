import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

import HeroVideo from '../Components/heroVideo';
import Header from '../Components/Header';
import BlogTargets from '../Components/BlogTargets';
// import Footer from '../Components/Footer';

const Home = () => {
    const { t } = useTranslation('home');

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

            <HeroVideo/>
            <Header/>

            <main>

                <div className="home-hero-container">
                    <section className="home-hero">
                        <h2 className="name">{t('hero.0.name.0.nameOne')} <span>{t('hero.0.name.0.nameTwo')}</span></h2>

                        <div className="d-grid-2-1 gap-20">
                            <div className="home-hero-content d-flex-column gap-20">
                                <h1>{t('hero.0.h1')} <span>{t('hero.0.h1Span')}</span></h1>

                                <div className="d-flex-column gap-20">
                                    <ul className="list-simple gap-10">
                                        <li>
                                            <span className="material-symbols-outlined">check_circle</span>
                                            <p className="text mx-width-500">{t('hero.0.text')}</p>
                                        </li>
                                        <li>
                                            <span className="material-symbols-outlined">check_circle</span>
                                            <p className="text mx-width-500">{t('hero.0.text')}</p>
                                        </li>
                                    </ul>

                                    <ul className="d-flex gap-10 home-hero-links">
                                        <li>
                                            <a href={t('hero.0.links.0.href')} className="button-link hero-link-2">
                                                <p className="">{t('hero.0.links.0.text')}</p>
                                                <span className="material-symbols-outlined">arrow_forward</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={t('hero.0.links.1.href')} className="button-link button-link-1">
                                                <span className="material-symbols-outlined">phone_in_talk</span>
                                                <p className="">{t('hero.0.links.1.text')}</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="d-flex">
                                <img src="/assets/images/gruas/crane.png" alt="" className="home-hero-img"></img>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="block-container">
                    <section className="block-content">
                        <div className="block-title-container">
                            <h3>{t('us.0.titleH3')}</h3>
                        </div>

                        <div className="d-grid-2-1 gap-20">
                            <div className="d-flex-column">
                                <img src="https://images.unsplash.com/photo-1498661694102-0a3793edbe74?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-simple"></img>
                            </div>

                            <div className="d-flex-column gap-20">
                                <p className="text">{t('us.0.text')}</p>
                                <ul className="d-flex gap-20  margin-left">
                                    <li>
                                        <a href={t('us.0.link.0.href')} className="button-link button-link-1">
                                            <span className="material-symbols-outlined">diversity_3</span>
                                            <p className="button-link-text">{t('us.0.link.0.text')}</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="block-container home-clients-block-container">
                    <section className="block-content">
                        <div className="block-title-container">
                            <h3>{t('clients.0.titleH3')}</h3>
                        </div>

                        <div className="home-clients-container">
                            <ul className="home-clients">
                                {t("clients.0.imgs", { returnObjects: true }).map((img) => (
                                    <li key={img.id}>
                                        <img src={img.imgSrc} alt={img.imgAlt} className="client-image" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="block-container">
                    <section className="block-content">
                        <div className="block-title-container">
                            <h3>{t('services.0.titleH3')}</h3>
                        </div>

                        <div className="home-services-container">
                            <div>1</div>
                            <div>2</div>
                        </div>
                    </section>
                </div>

                <BlogTargets/>

                <div className="block-container">
                    <section className="block-content">
                        <div className="block-title-container">
                            <h3>Contáctanos y cotiza nuestros servicios</h3>
                        </div>

                        <div className="d-flex-center">
                            <a className="button-link button-link-1">
                                <p className="button-link-text">Llamar ahora</p>
                            </a>
                        </div>
                    </section>
                </div>
            </main>

            {/* <Footer/> */}

        </>
    );
};

export default Home;