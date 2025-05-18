import './AboutUs.css';

function AboutUs(){
    return(
        <div className='block-container'>
            <section className='block-content'>
                <div className='homepage-about-us'>
                    <div className='homepage-about-us-target homepage-about-us-target-1 d-flex-column gap-20'>
                        <div className='block-title-container'>
                            <h2 className='block-title font-anton'>Nosotros</h2>
                        </div>

                        <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                        <ul className='list-buttons'>
                            <li>
                                <a href='/nosotros/' title="Nosotros | Grúas Ememca" className='button-link button-link-1'>
                                    <p className='button-link-text'>Conocenos más</p>
                                    <span className="material-symbols-outlined">groups</span>
                                </a>
                            </li>
                            <li>
                                <a href='/nosotros/' title="Contacto | Grúas Ememca" className='button-link button-link-3'>
                                    <p className='button-link-text'>Trabajemos juntos</p>
                                    <span className="material-symbols-outlined">phone_in_talk</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='homepage-about-us-target homepage-about-us-target-2'>
                        <div className='homepage-about-us-slider'>
                            <ul>
                                <li>
                                    <img src="/assets/media/images/homepage/1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/assets/media/images/homepage/2.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/assets/media/images/homepage/3.jpg" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;
