import React from 'react';
import { useTranslation } from 'react-i18next';

import './BlogTargets.css';

function BlogTargets() {
    const { t } = useTranslation('blogTargets');

    return (
        <div className='block-container block-container-blog-targets'>
            <section className='block-content'>
                <div className='block-title-container'>
                    <h2>{t('title.0.title')}</h2>
                </div>

                <div className='blog-targets-container'>
                    <ul className="blog-targets">
                        <li className='blog-target blog-target-1'>
                            <a href={t('list.0.href')}>
                                <img src={t('list.0.imgSrc')} alt={t('list.0.imgAlt')} />

                                <div className='d-flex-column'>
                                    <p className='blog-target-tag category-1'>{t('list.0.content.0.category')}</p>
                                    <p className='text-title'>{t('list.0.content.0.title')}</p>
                                    <p className='text'>{t('list.0.content.0.text')}</p>
                                </div>
                            </a>
                        </li>
                        <li className='blog-target blog-target-2'>
                            <a href={t('list.1.href')}>
                                <img src={t('list.1.imgSrc')} alt={t('list.1.imgAlt')} />

                                <div className='d-flex-column'>
                                    <p className='blog-target-tag category-2'>{t('list.1.content.0.category')}</p>
                                    <p className='text-title'>{t('list.1.content.0.title')}</p>
                                    <p className='text'>{t('list.1.content.0.text')}</p>
                                </div>
                            </a>
                        </li>
                        <li className='blog-target blog-target-3'>
                            <a href={t('list.2.href')}>
                                <img src={t('list.2.imgSrc')} alt={t('list.2.imgAlt')} />

                                <div className='d-flex-column'>
                                    <p className='blog-target-tag category-3'>{t('list.2.content.0.category')}</p>
                                    <p className='text-title'>{t('list.2.content.0.title')}</p>
                                    <p className='text'>{t('list.2.content.0.text')}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default BlogTargets;

// NOTA:
//
// Tipo de categorías:
// Servicios: Para noticias sobre los nuevos servicios que hemos realizados
// Blog: Noticia acerca de alguna novedad nuestra como empresa, alguna certificacion nueva, adquisión de una nueva grúa, etc
// Novedades: Para noticias a nivel nacional o mundial pero en relación a nuestro rubro
//
// Titulo de la tarjeta:
// Servicios: Que sea breve ( no más de 5 palabras ) + | + Nombre de la empresa contratista
// Blog: Nombre de la noticia ( no más de 6 palabras )
// Novedades: Nombre de la noticia ( no más de 6 palabras )
// 
// Texto de la tarjeta;
// 