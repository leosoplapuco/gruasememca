import React from 'react';
import { useTranslation } from 'react-i18next';

function ChatBot(){
    const { t } = useTranslation('chatBot');

    return(
        <>
            <button type='button' className='chatBotButton'>
                <span className="material-symbols-outlined">help</span>
                <p className=''>Preguntas frecuentes</p>
            </button>
        </>
    );
}

export default ChatBot;
