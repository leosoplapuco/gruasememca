import './Map.css';

function Map(){
    return(
        <div className="block-container contact-block-container">
            <section className="block-content">
                <div className='block-title-container'>
                    <h3 className='block-title'>Ubícanos</h3>
                </div>

                <iframe className='map' title="Grúas Ememca" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.4745246110995!2d-76.91951285696216!3d-12.25445145007965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bb17b653d613%3A0x3d72e660c7045fea!2sGr%C3%BAas%20Ememca%20SAC!5e0!3m2!1ses-419!2spe!4v1741405341120!5m2!1ses-419!2spe" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    );
}

export default Map;
