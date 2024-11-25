const router = require("express").Router();
const {
    getAllUsers,
    getLoggedUser,
} = require("../../controllers/users.controller");

/**
 * @swagger
 * tags:
 *   - users
 * /api/users:
 *   get:
 *     summary: Gets an array with the information of all the users
 *     tags: [users]
 *     security:
 *       - Authorization: []
 *     parameters:
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       403:
 *         description: Invalid API key

* /api/users/loggedUser:
 *   get:
 *     summary: Gets an object with the information of the user currently logged
 *     tags: [users]
 *     security:
 *       - Authorization: []
 *     parameters:
 *       - name: id
 *         in: query auth token
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       403:
 *         description: Invalid API key
 *
 */

router.get("/", getAllUsers);
router.get("/loggedUser", getLoggedUser);

module.exports = router;
