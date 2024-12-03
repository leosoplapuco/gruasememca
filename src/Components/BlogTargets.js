import React from 'react';
import { useTranslation } from 'react-i18next';

function BlogTargets() {
    const { t } = useTranslation('blogtargets');

    return (
        <div className='block-container'>
            <section className='block-content'>
                <div className='block-title-container'>
                    <h3>{t('title')}</h3>
                </div>

                <ul className="blog-targets">
                    {t('list', { returnObjects: true }).map((item) => (
                        <li key={item.id} className="blog-item">
                            <a href={item.href || '#'} className="hover-target">
                                {item.imgSrc && (
                                    <img src={item.imgSrc} alt={item.imgAlt}/>
                                )}
                                <div className="d-flex">
                                    {item.content.map(({ id, title, text }) => (
                                        <div key={id} className="content-block">
                                            <h4 className='text-title'>{title}</h4>
                                            <p className='text'>{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default BlogTargets;