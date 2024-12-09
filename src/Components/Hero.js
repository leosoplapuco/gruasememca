import React from 'react';

function Hero({title, titleSpan}){
    return (
        <section className='hero-container'>
            <div className='hero'>
                <h1>{title}<span>{titleSpan}</span></h1>
            </div>
        </section>
    );
}

export default Hero;
