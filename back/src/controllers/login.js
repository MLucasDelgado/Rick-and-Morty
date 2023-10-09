const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query;

    if (!email || !password){
        return res.status(400).json({error: 'Se requieren email y contraseña.'})
    }

    const userFound = users.find((user) => user.email === email && user.password === password);

    if(!userFound){
        return res.status(401).json({error: 'Email no valido.'});
    }

    if(userFound.password !== password) {
        return res.status(401).json({error: 'Contraseña incorrecta'});
    }

    return res.status(200).json({ access: true })
};

module.exports = login






