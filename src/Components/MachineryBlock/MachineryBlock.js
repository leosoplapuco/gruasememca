import './MachineryBlock.css';

function MachineryBlock(){
    return(
        <section className="block-container homepage-machinery-block-container">
            <div className='block-content'>
                <div className="block-title-container">
                    <h2>Nuestra maquinaria</h2>
                </div>

                <div className='homepage-machinery-targets d-grid-2-1 gap-20'>
                    <div className='homepage-machinery-target homepage-machinery-target-1'>
                        <img src="/assets/images/Pages/Homepage/maquina-1.png" alt="" />

                        <a href='/' className='homepage-machinery-target-button link link-1 margin-left'>
                            <p>Ver ficha completa</p>
                            <span className="material-icons">arrow_forward</span>
                        </a>
                    </div>
                    <div className='homepage-machinery-target homepage-machinery-target-2'>
                        <p className='homepage-machinery-name'>Pettibone 80</p>

                        <div className='d-flex d-flex-column gap-20'>
                            <ul className='list-simple'>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p>1988</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p>Caja fuller</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p>12 x 3.20 metros</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p>Pluma de 33 metros</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p>Motor Cummis Americano</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p>Nacionalidad americana</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p>Motor petrólero</p>
                                </li>
                            </ul>
                            <div className=''>
                                <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                            </div>
                        </div>

                        <div className='homepage-machinery-miniatures-container'>
                            <ul className='homepage-machinery-miniatures'>
                                <li>
                                    <img src="/assets/images/Pages/Homepage/maquina-1.png" alt="" />
                                </li>
                                <li>
                                    <img src="/assets/images/Pages/Homepage/maquina-1.png" alt="" />
                                </li>
                                <li>
                                    <img src="/assets/images/Pages/Homepage/maquina-1.png" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MachineryBlock;