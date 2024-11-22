const router = require('express').Router()

router.use ('/users', require ('./api/users'))

router.use ('/register', require ('./api/register'))

module.exports = router