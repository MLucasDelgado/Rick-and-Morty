const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require('axios')


const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(`${URL}/${id}`);
    const { name, status, species, origin, image, gender } = response.data;
    if (name) {
      const character = {
        id,
        name,
        status,
        species,
        origin,
        image,
        gender,
      };
      return res.status(200).json(character);
    }

    return res.status(404).send("Not fOUND");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  getCharById,
};



























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