const {Favorite} = require('../DB_connection');

const postFav = async(req, res) => {
    try{
        const {id, name, image, gender, status, origin, species} = req.body;
    
        if(!id || !name || !image || !gender || !status || !origin || !species){
            console.log(req.body)
            return res.status(401).send('Faltan datos')
        }
    
        await Favorite.findOrCreate({
            where:{
                id: id, 
                name: name, 
                image: image, 
                gender: gender,
                status: status,
                origin: origin,
                species: species
            }});
    
        const allFavorites = await Favorite.findAll();
        return res.status(200).json(allFavorites)
        
    } catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {
    postFav
}