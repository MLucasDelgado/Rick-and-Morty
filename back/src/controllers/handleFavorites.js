let myFavorites = [];

const postFav = (req, res) => {
    const newUser = req.body

    myFavorites.push(newUser);

    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    
    myFavorites = myFavorites.filter((character) => {
        // Me estoy quedando con todos los personajes cuyo id sean distintos al id que me envian por parametro
        return character.id != id;
    })

    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}