const {User} = require('../DB_connection')

const login = async(req, res) => {
    try{
        const {email, password} = req.query;
    
        if(!email || !password) return res.status(400).send('Faltan datos')
    
        const userFind = await User.findOne({where: {email: email}})
    
        if(!userFind) return res.status(404).send('Usuario no encontrado');
    
        if(userFind.password === password) {
            return res.status(200).json({access: true})
        } else {
            res.status(403).send('Contraseña incorrecta')
        }
    } catch(error){
        res.status(500).send(error.message)
    }


}   
module.exports = login






