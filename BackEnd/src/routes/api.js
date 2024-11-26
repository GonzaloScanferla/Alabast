const router = require('express').Router()

const {checkToken} = require ('../middlewares/common.middleware')

router.use ('/register', require ('./api/register'))
router.use ('/login', require ('./api/login'))
router.use ('/users', checkToken, require ('./api/users'))

module.exports = router