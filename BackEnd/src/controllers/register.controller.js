
const User = require('../models/users.model')
const {createToken} = require ('../middlewares/JWTLogin')
const bcrypt = require ('bcrypt')

const createNewUser = async (req, res, next) => {

    // Password encryption
    req.body.password = bcrypt.hashSync(req.body.password, 10)

    try {

        const [response] = await User.createNew (req.body)

        const [newUser] = await User.getById (response.insertId)

        // the new user data is used to generate the login token. By default the parameter rememberSession of createToken is set to false
        res.json({
            success: true,
            token: createToken (newUser, false)
        })

    } catch (error) {
        next (error)
    }

}

module.exports = {
    createNewUser
}