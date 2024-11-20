const Users = require('../models/users.model')

const getAllUsers = async (req, res,next) => {
    try {
        const result = await Users.getAll()
        res.json (result)
    } catch (error) {
        next (error)
    }
}

module.exports = {
    getAllUsers
}