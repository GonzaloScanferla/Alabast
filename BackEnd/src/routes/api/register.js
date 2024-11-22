const router = require('express').Router()

const {createNewUser} = require ('../../controllers/register.controller')

router.post('/', createNewUser)

module.exports = router