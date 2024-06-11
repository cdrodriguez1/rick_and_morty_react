import React, { useEffect, useState } from 'react'
import Gallery from '../../components/Gallery/Gallery';
import axios from 'axios';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';

// export default function CharactersPage() {

//     const [characters, setCharacters] = useState([]);

//     useEffect(() => {
//         //con axios,
//         const getCharacters = async () => {
//             const { data } = await axios('https://rickandmortyapi.com/api/character')

//             // con Fetch,
//             // const response = await fetch('https://rickandmortyapi.com/api/character')
//             // const resData = await response.json();

//             setCharacters(data.results);
//         }

//         getCharacters();

//     }, [])
//     // console.log(characters);


//     return (
//         <div>
//             <Gallery listCharacters={characters} />

//         </div>
//     )
// }

let globalFilters;
export default function CharactersPage() {
    const [characters, setCharacters] = useState([]);
    // const [actualPage, setActualPage] = useState(1);

    //con axios,
    const getCharacters = async (page, filters) => {
        globalFilters = filters === undefined ? globalFilters : filters;
        const { data } = await axios('https://rickandmortyapi.com/api/character?page=' + page + (globalFilters ? '&name' + globalFilters.name : ''));

        // con Fetch,
        // const response = await fetch('https://rickandmortyapi.com/api/character')
        // const resData = await response.json();

        setCharacters(data.results);
    }

    useEffect(() => {
        getCharacters(1);
    }, [])
    // console.log(characters);

    return (
        <div>
            <Search setActualPage={setActualPage} onFilter={getCharacters} />
            <Gallery listCharacters={characters} />
            <Pagination actualPage={getCharacters} setActualPage={setActualPage} onChangePage={getCharacters} />
        </div>
    )
}
