import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {
    // useParams me retorna un objeto, y le indicamos que nos de el id con un destructuring.
    const { id } = useParams(); 
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        })
        .catch(() => {
            console.log('se rompio')
        })
        //Se desmonta el estado para ahorro de recursos y no quede sobre cargado.
        return setCharacter({});
     }, [id]); // El cilo de dependecia del array es de update, se actualiza

    return(
        <div>
            <h2>Name: {character?.name}</h2>
            <h2>Species: {character?.species}</h2>
            <h2>Gender: {character?.gender}</h2>
            <h2>Status: {character?.status}</h2>
            <h2>Origin: {character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;