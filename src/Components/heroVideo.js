import React from 'react';

function HeroVideo(){
    return (
        <section className='hero-video-container'>
            <div className='hero-video'>
                <video autoPlay muted loop>
                    <source src="https://www.gruasememca.com/media/videos/video-1.webm" type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default HeroVideo;
