const router = require('express').Router()

const {checkToken} = require ('../middlewares/access.middleware')

router.use ('/register', require ('./api/register'))
router.use ('/login', require ('./api/login'))
router.use ('/activities', require ('./api/activities'))
router.use ('/users', checkToken, require ('./api/users'))

module.exports = router