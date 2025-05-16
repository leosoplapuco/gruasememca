import './AboutUs.css';

function AboutUs(){
    return(
        <div className='block-container'>
            <section className='block-content'>
                <div className='block-title-container'>
                    <h2 className='block-title font-anton'>Nosotros</h2>
                </div>

                <div className='homepage-about-us'>
                    <div className='homepage-about-us-target homepage-about-us-target-1'>
                        <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <a href='/nosotros/' title="Nosotros | Grúas Ememca" className='button-link button-link-1'>
                            <p className='button-link-text'>Conoce más</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;
