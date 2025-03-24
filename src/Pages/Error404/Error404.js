import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './Error404.css';

function Error404(){
    return(
        <>
            <Header/>

            <main>
                <p>Lo sentimos está página ya no está disponible</p>
            </main>

            <Footer/>
        </>
    );
}

export default Error404;
