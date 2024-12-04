const Activities = require("../models/activities.model");
const { getAllCount } = require("../models/common.model");
const {getPaginationData, getImages} = require("../common/utils");

/**
 * Controller to fetch the information for activities in paginated format.
 * 
 * @param {import('express').Request} req - The HTTP request object.
 * @param {import('express').Response} res - The HTTP response object.
 * @param {Function} next - The middleware function to pass control to the next middleware.
 * @returns {Promise<void>} Sends a JSON response with paginated activity data and metadata.
 */
const getAllActivities = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const results = {};

        // Fetch paginated results and total count
        const [result] = await Activities.getAll(limit, offset);
        const [[usersCount]] = await getAllCount("users");

        // Extract pagination details
        const pagination = getPaginationData(page, limit, usersCount.count);

        results.data = result;
        results.pagination = pagination;

        // getImages (req.query.folder, )

        res.json(results);

    } catch (error) {
        next(error)
    }
}

/**
 * Controller to fetch the information for activities filtered by category in paginated format.
 * 
 * @param {import('express').Request} req - The HTTP request object.
 * @param {import('express').Response} res - The HTTP response object.
 * @param {Function} next - The middleware function to pass control to the next middleware.
 * @returns {Promise<void>} Sends a JSON response with paginated activity data and metadata.
 */
const getActivitiesByCategory = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const category = (req.query.category);

        const results = {};

        // Fetch paginated results and total count
        const [result] = await Activities.getByCategory(category, limit, offset);
        const [[usersCount]] = await getAllCount("users");

        // Extract pagination details
        const pagination = getPaginationData(page, limit, usersCount.count);

        results.data = result;
        results.pagination = pagination;

        res.json(results);

    } catch (error) {
        next(error)
    }
}


const getAllCategories = async (req, res, next) => {
    try {
        const [results] = await Activities.getCategories()
        res.json (results)

    } catch (error) {
        next (error)
    }
}

module.exports = {
    getAllActivities,
    getActivitiesByCategory,
    getAllCategories
}