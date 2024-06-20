import { useEffect, useState } from 'react'
import Gallery from '../../components/Gallery/Gallery';
import axios from 'axios';
import Contador from '../../components/Contador/Contador';


export default function CharactersPage() {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async (page) => {
        const { data } = await axios('https://rickandmortyapi.com/api/character?page=' + page)
        setCharacters(data.results);
    }

    useEffect(() => {
        getCharacters(1)
    }, [])
    console.log(characters);

    return (
        <div>
            <Gallery listCharacters={characters} />
            <Contador onChangePage={getCharacters} />
        </div>
    )
}

