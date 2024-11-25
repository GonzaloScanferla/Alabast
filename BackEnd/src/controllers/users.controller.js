const Users = require("../models/users.model");
const { getAllCount } = require("../models/common.model");
const getPaginationData = require("../common/utils");

/**
 * Fetches all users with pagination options.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function for error handling.
 *
 * @returns {void} Sends a JSON response containing user data and pagination information.
 *
 * @throws {Error} If there's an error during user retrieval or pagination calculation.
 */
const getAllUsers = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const results = {};

        // Fetch paginated results and total count
        const [result] = await Users.getAll(limit, offset);
        const [[usersCount]] = await getAllCount("users");

        // Extract pagination details
        const pagination = getPaginationData(page, limit, usersCount.count);

        results.data = result;
        results.pagination = pagination;

        res.json(results);
    } catch (error) {
        next(error);
    }
};

/**
 * Retrieves a user from the database using the ID provided in the request object's `user.id` property.
 *
 * @param {import('express').Request} req The Express request object.
 * @param {import('express').Response} res The Express response object.
 * @param {import('express').NextFunction} next The Express next function for error handling.
 *
 * @returns {Promise<void>} Resolves after sending the user data as JSON in the response.
 *
 * @throws {Error} Any error thrown during the user retrieval process.
 */
const getLoggedUser = async (req, res, next) => {
    try {
        const [user] = await Users.getById(req.user.id);

        res.json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
    getLoggedUser,
};
