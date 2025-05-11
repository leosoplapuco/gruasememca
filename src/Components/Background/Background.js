import './Background.css';

function Background(){
    return(
        <section className='homepage-hero-container'>
            <div className='homepage-hero-content'>
                <video muted autoPlay loop>
                    <source src='https://www.gruasememca.com/media/videos/video-1.webm' type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default Background;
