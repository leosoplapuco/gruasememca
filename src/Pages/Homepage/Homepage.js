import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import React, { useState } from "react";

import Header from '../../Components/Header/Header';
import BlogTargets from "../../Components/BlogTargets/BlogTargets";
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
                                    <a href="/" className="link link-1">
                                        <p>{t('heroLinks.0.linkOne')}</p>
                                        <span className="material-icons">arrow_forward</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="link link-2">
                                        <span className="material-icons">phone_in_talk</span>
                                        <p>{t('heroLinks.0.linkTwo')}</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="hero-target hero-target-2">
                            <div className="target-video target-video-1">
                                <img src="https://gruasememca.vercel.app/assets/images/Components/Hero/gruas-ememca-repsol-2024.webp" width={540} height={303} alt="Servicios de izaje para REPSOL - Grúas Ememca 2024"></img>

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

                        <video controls>
                            <source src="https://gruasememca.vercel.app/assets/videos/video-1.webm" type="video/webm" />
                        </video>
                        
                        <p className="text">{t('targetVideo.0.description')}</p>

                        <a className="link link-2 margin-left" href={t('targetVideo.0.linkHref')} title={t('targetVideo.0.linkText')}>
                            <p>{t('targetVideo.0.linkText')}</p>
                            <span className="material-icons">arrow_forward</span>
                        </a>
                    </div>
                </div>

                <BlogTargets/>

                <div className="block-container homepage-about-us-container">
                    <section className="block-content">
                        <div className="block-title-container">
                            <h2>{t('AboutUs.0.title')}</h2>
                        </div>

                        <div className="homepage-about-us">
                            <div className="homepage-about-us-top">
                                <div className="homepage-about-us-top-target homepage-about-us-top-target-1">
                                    <p>{t('AboutUs.0.firstPhrase')}</p>
                                </div>
                                <div className="homepage-about-us-top-target homepage-about-us-top-target-2">
                                    <p>{t('AboutUs.0.firstParagraph.0.textOne')} <a href={t('AboutUs.0.firstParagraph.0.linkOne.0.href')} title={t('AboutUs.0.firstParagraph.0.linkOne.0.title')}>{t('AboutUs.0.firstParagraph.0.linkOne.0.text')}</a> {t('AboutUs.0.firstParagraph.0.textTwo')} <a href={t('AboutUs.0.firstParagraph.0.linkTwo.0.href')} title={t('AboutUs.0.firstParagraph.0.linkTwo.0.title')}>{t('AboutUs.0.firstParagraph.0.linkTwo.0.text')}</a> {t('AboutUs.0.firstParagraph.0.textThree')}</p>
                                </div>
                            </div>

                            <div className="homepage-about-us-center">
                                <div className="homepage-about-us-center-target homepage-about-us-center-target-1">
                                    <ul className="">
                                        <li>
                                            <button type="button" className="homepage-about-us-list-button homepage-about-us-list-button-1 active">
                                                <p>Resumen</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" className="homepage-about-us-list-button homepage-about-us-list-button-2">
                                                <p>Nuestra historia</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" className="homepage-about-us-list-button homepage-about-us-list-button-3">
                                                <p>Certificaciones</p>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="homepage-about-us-center-target homepage-about-us-center-target-2">
                                    <div className="">
                                        <ul className="">
                                            <li>
                                                <video controls>
                                                    <source src="https://gruasememca.vercel.app/assets/videos/video-1.webm" type="video/webm" />
                                                </video>
                                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                                            </li>
                                            <li>
                                                <video controls>
                                                    <source src="https://gruasememca.vercel.app/assets/videos/video-1.webm" type="video/webm" />
                                                </video>
                                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                                            </li>
                                            <li>
                                                <video controls>
                                                    <source src="https://gruasememca.vercel.app/assets/videos/video-1.webm" type="video/webm" />
                                                </video>
                                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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