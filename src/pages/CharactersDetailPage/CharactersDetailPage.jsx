import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function CharactersDetailPage() {
    const { id } = useParams();

    const [character, setCharacter] = useState({})

    useEffect(() => {
        const getCharacter = async () => {
            const { data } = await axios('https://rickandmortyapi.com/api/character/' + id)
            // console.log(data);
            setCharacter(data)
        }
        getCharacter()


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // console.log(character);

    return (

        <div className='font-color'>
            <img src={character.image} alt={character.name} className='img' />
            <h1>{character.name}</h1>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.type}</h2>
            <h2>{character.gender}</h2>
        </div>
    )
}
