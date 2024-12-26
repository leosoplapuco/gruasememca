import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

import HeroVideo from '../Components/heroVideo';
import Header from '../Components/Header';
import BlogTargets from '../Components/BlogTargets';
import Settings from '../Components/Settings';
import Footer from '../Components/Footer';

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
                        {/* <h2 className="name">{t('hero.0.name.0.nameOne')} <span>{t('hero.0.name.0.nameTwo')}</span></h2> */}

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
                                <img src="/assets/images/gruas/crane.png" alt="Nombre de la grua" className="home-hero-img"></img>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="block-container home-block-services">
                    <section className="block-content d-flex-column">
                        <div className="block-title-container">
                            <h3 className="color-red">{t('services.0.titleH3')}</h3>
                        </div>

                        <div className="home-services-container">
                            <div className="home-service-target home-service-target-1 d-flex-column gap-10">
                                <p className="text-title font-anton">{t('services.0.phrase')}</p>
                                <p className="text">{t('services.0.text')}</p>

                                <div className="d-flex gap-10">
                                    <a href="" className="button-link button-link-1">
                                        <p className="button-link-text">Link 1</p>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="home-service-target home-service-target-2"></div>

                            <ul className="home-service-target home-service-target-3">
                                <li>
                                    <div>
                                        <img src={t('services.0.targets.0.imgSrc')} alt={t('services.0.targets.0.imgAlt')}/>
                                        <div className="d-flex-colmun"> 
                                            <p className="text-title">{t('services.0.targets.0.title')}</p>
                                            <p className="text">{t('services.0.targets.0.text')}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={t('services.0.targets.1.imgSrc')} alt={t('services.0.targets.1.imgAlt')}/>
                                        <div className="d-flex-colmun"> 
                                            <p className="text-title">{t('services.0.targets.1.title')}</p>
                                            <p className="text">{t('services.0.targets.1.text')}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={t('services.0.targets.2.imgSrc')} alt={t('services.0.targets.2.imgAlt')}/>
                                        <div className="d-flex-colmun"> 
                                            <p className="text-title">{t('services.0.targets.2.title')}</p>
                                            <p className="text">{t('services.0.targets.2.text')}</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
                        <div className="home-clients-container">
                            <ul className="home-clients">
                                {t("clients.0.imgs", { returnObjects: true }).map((img) => (
                                    <li key={img.id}>
                                        <img src={img.imgSrc} alt={img.imgAlt} className="client-image" />
                                    </li>
                                ))}
                            </ul>

                            <a href={t('clients.1.href')} className="button-link button-link-1 margin-left">
                                <p className="button-link-text">{t('clients.1.text')}</p>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                    </section>
                </div>

                <BlogTargets/>

                <div className="block-container">
                    <section className="block-content">
                        <div className="block-title-container">
                            <h3>{t('comments.0.titleH3')}</h3>

                            <ul className="comments">
                                <li>
                                    <div className="comment comment-1 d-flex-column gap-10">
                                        <div className="comment-top">
                                            <img src="https://turkeyanaclinic.com/wp-content/uploads/2023/05/Baby-Face-02.jpg" alt="" />
                                            <div className="comment-info">
                                                <div className="d-flex-column">
                                                    <p className="text-title">Luz García</p>
                                                    <p className="text">REPSOL</p>
                                                </div>

                                                <div className="comment-stars">
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment-bottom">
                                            <p className="text">Texto - comentario</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="comment comment-1 d-flex-column gap-10">
                                        <div className="comment-top">
                                            <img src="https://turkeyanaclinic.com/wp-content/uploads/2023/05/Baby-Face-02.jpg" alt="" />
                                            <div className="comment-info">
                                                <div className="d-flex-column">
                                                    <p className="">Luz García</p>
                                                    <p className="">REPSOL</p>
                                                </div>

                                                <div className="comment-stars">
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment-bottom">
                                            <p className="">Texto - comentario</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="comment comment-1 d-flex-column gap-10">
                                        <div className="comment-top">
                                            <img src="https://turkeyanaclinic.com/wp-content/uploads/2023/05/Baby-Face-02.jpg" alt="" />
                                            <div className="comment-info">
                                                <div className="d-flex-column">
                                                    <p className="">Luz García</p>
                                                    <p className="">REPSOL</p>
                                                </div>

                                                <div className="comment-stars">
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment-bottom">
                                            <p className="">Texto - comentario</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="comment comment-1 d-flex-column gap-10">
                                        <div className="comment-top">
                                            <img src="https://turkeyanaclinic.com/wp-content/uploads/2023/05/Baby-Face-02.jpg" alt="" />
                                            <div className="comment-info">
                                                <div className="d-flex-column">
                                                    <p className="">Luz García</p>
                                                    <p className="">REPSOL</p>
                                                </div>

                                                <div className="comment-stars">
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment-bottom">
                                            <p className="">Texto - comentario</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="block-container">
                    <section className="block-content">
                        <p>Fomulario de contacto</p>
                    </section>
                </div>

                <Settings/>
            </main>

            <Footer/>
        </>
    );
};

export default Home;