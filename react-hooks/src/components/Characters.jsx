import React,{ useState, useEffect } from 'react'

const Characters = () => {

    const [characters,setcharacters]= useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setcharacters(data.results))
    },[]);


    return (
        <div className="Characteres">
            {characters.map(character => (
                <h2>{character.name}</h2>
            ))}
        </div>
    )
}

export default Characters
