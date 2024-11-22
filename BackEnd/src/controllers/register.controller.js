
const User = require('../models/users.model')
const {createToken} = require ('../common/JWTLogin')
const bcrypt = require ('bcrypt')

/**
 * Handles the creation of a new user by:
 * 1. Hashing the provided password.
 * 2. Creating a new user record in the database.
 * 3. Retrieving the newly created user's information.
 * 4. Generating a login token for the new user.
 *
 * @param {import('express').Request} req The Express request object containing the user data.
 * @param {import('express').Response} res The Express response object.
 * @param {import('express').NextFunction} next The Express next function for error handling.
 *
 * @returns {void} Sends a JSON response with a success flag and a generated token.
 */
const createNewUser = async (req, res, next) => {

    // Password encryption
    req.body.password = bcrypt.hashSync(req.body.password, 10)

    try {

        const [response] = await User.createNew (req.body)

        const [[newUser]] = await User.getById (response.insertId)

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