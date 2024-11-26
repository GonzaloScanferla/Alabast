const router = require('express').Router()

const {login} = require ('../../controllers/login.controller')

router.post ('/', login)

module.exports = router

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Obtains a login token given the data contained in the request body
 *     tags: [login]
 *     security:
 *     requestBody:
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Login'
 *     responses:
 *       401:
 *         description: Incorrect email or password.
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Register'
 */