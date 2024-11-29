const bcrypt = require('bcrypt')

const { getByEmail } = require('../models/users.model')
const { createToken } = require ('../common/JWTLogin')

/**
 * Handles user login requests.
 *
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @param {Function} next The next middleware function.
 *
 * @throws {Error} If required fields are missing or the user credentials are invalid.
 */
const login = async (req, res, next) => {
    try {
        const { email, password, rememberSession } = req.body;

        // Checks if the request has the necessary data
        if (!email || !password) throw new Error();
  
        // Checks if selected mail exists
        const [[user]] = await getByEmail(email);
        if (!user) return res.status(401).json({ error: "Incorrect email, or password" });
      
        // Checks if the user has unsuscribed
        if (!user.active) return res.status(401).json({ error: "The selected user is not active" });
      
        // Checks if the password is correct
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) return res.status(401).json({ error: "Incorrect email, or password" });
  
        res.json({
            success: true,
            token: createToken(user, rememberSession)
        });
    } catch (error) {
        next (error)
    }
}

module.exports = {
    login
}
