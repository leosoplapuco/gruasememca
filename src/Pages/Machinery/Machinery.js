import './Machinery.css';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Machinery(){
    return(
        <>
            <Header/>

            <main>
                <div className='block-container'>
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h2 className='block-title'>Maquinaria</h2>
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default Machinery;
