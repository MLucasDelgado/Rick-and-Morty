let myFavorites = [];

const postFav = (req, res) => {
    const newUser = req.body

    // const newUserRepeated = myFavorites.find((favorite) => {
    //     return favorite.id == newUser.id
    // });

    // if(!newUserRepeated)  
    myFavorites.push(newUser);

    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    
    myFavorites = myFavorites.filter((character) => {
        return character.id != id;
    })

    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}