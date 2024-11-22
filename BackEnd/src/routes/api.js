const router = require('express').Router()

const {checkToken} = require ('../middlewares/common.middleware')

router.use ('/users', checkToken, require ('./api/users'))
router.use ('/register', require ('./api/register'))

module.exports = router