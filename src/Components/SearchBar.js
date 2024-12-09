import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SearchBar = () => {
    const { t, i18n } = useTranslation();
    const [busqueda, setBusqueda] = useState("");
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const opciones = t('options', { ns: 'searchBar', returnObjects: true }) || [];
        setResultados(opciones);
    }, [i18n.language]);

    const handleChange = (e) => {
        const value = e.target.value;
        setBusqueda(value);

        const opciones = t('options', { ns: 'searchBar', returnObjects: true }) || [];
        const resultadosFiltrados = opciones.filter(opcion =>
            opcion.text.toLowerCase().includes(value.toLowerCase())
        );
        setResultados(resultadosFiltrados);
    };

    return(
        <div className='margin-left search-bar-container'>
            <input type="text" className='search-bar' placeholder={t('placeholder', { ns: 'searchBar' })} value={busqueda} onChange={handleChange} />
            
            <nav className='search-bar-options-container'>
                <ul className='search-bar-options'>
                    {resultados.map((resultado) => (
                        <li key={resultado.id}>
                            <a href={resultado.href}>{resultado.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SearchBar;