import './ChaBot.css';

function ChaBot(){
    return(
        <>
            <div className='chatbot-button-container'>
                <div className='chatbot-button-content'>
                    <button type='button' className='chatbot-button'>
                        <span class="material-symbols-outlined">robot_2</span>
                    </button>

                    <p>Asistencia en línea</p>
                </div>
            </div>

            <section className='chat-container'>
                <div className='chat-content'>
                    <div className='chat-top'>
                        <p>gruasememca</p>

                        <button type='button' className='chat-close'>
                            <span class="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <div className='chat'>
                        <div className='message-in'>
                            <div className='message'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className='response'>
                            <div className='message'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChaBot;
