const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require('axios')


const getCharById = async(req, res) => {
    const { id } = req.params
    await axios (URL + id)
    .then (({data}) => {
        const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender
        }

        if(character) return res.status(200).json(character)
        return res.status(404).send('Not fount')
    })
    .catch((error)=>{
        res.status(500).json(error.message)
    })
}

module.exports = {
    getCharById
}


























// const axios = require('axios')

// const getCharById = (response, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data) 
//     .then(({name, gender, species, origin, image, status}) => {
//         const character = {
//             id: id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }
//         // return para que la ejecucion corte
//         return response
//             .writeHead(200, {'content-type': 'application/json'})
//             .end(JSON.stringify(character))
//     })
    
//     .catch((error) => {
//         return response
//             .writeHead(500, {'content-type': 'text/plain'})
//             .end(error.message); // Utilizamos error.message para obtener el mensaje de error
//     })
// }

// module.exports = {
//     getCharById
// };