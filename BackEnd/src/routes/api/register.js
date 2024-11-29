const router = require('express').Router()

const {createNewUser} = require ('../../controllers/register.controller')

router.post('/', createNewUser)

module.exports = router

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Posts a new user with the data contained in the request body
 *     tags: [register]
 *     security:
 *     requestBody:
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Register'
 *     responses:
 *       409:
 *         description: Conflict, the email is already in use.
 *       403:
 *         description: Forbidden, the email exists but is deactivated..
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Register'
 */