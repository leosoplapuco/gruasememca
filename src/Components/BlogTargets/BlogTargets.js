import React from 'react';
import { useTranslation } from 'react-i18next';

import './BlogTargets.css';

function BlogTargets() {
    const { t } = useTranslation('blogTargets');

    return (
        <div className='block-container block-container-blog-targets'>
            <section className='block-content'>
                <div className='block-title-container'>
                    <h2>{t('title.0.title')} <span>{t('title.0.titleSpan')}</span></h2>
                </div>

                <div className='blog-targets-container'>
                    <ul className="blog-targets">
                        <li className='blog-target blog-target-1'>
                            <a href={t('list.0.href')}>
                                <img src={t('list.0.imgSrc')} alt={t('list.0.imgAlt')} />

                                <div className='d-flex-column'>
                                    <p className='text-title'>{t('list.0.content.0.title')}</p>
                                    <p className='text'>{t('list.0.content.0.text')}</p>
                                </div>
                            </a>
                        </li>
                        <li className='blog-target blog-target-2'>
                            <a href={t('list.1.href')}>
                                <img src={t('list.1.imgSrc')} alt={t('list.1.imgAlt')} />

                                <div className='d-flex-column'>
                                    <p className='text-title'>{t('list.1.content.0.title')}</p>
                                    <p className='text'>{t('list.1.content.0.text')}</p>
                                </div>
                            </a>
                        </li>
                        <li className='blog-target blog-target-3'>
                            <a href={t('list.2.href')}>
                                <img src={t('list.2.imgSrc')} alt={t('list.2.imgAlt')} />

                                <div className='d-flex-column'>
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