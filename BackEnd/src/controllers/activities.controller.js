const Activities = require("../models/activities.model");
const { getAllCount } = require("../models/common.model");
const getPaginationData = require("../common/utils");

const getAllActivities_IdTitle = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const results = {};

        // Fetch paginated results and total count
        const [result] = await Activities.getAll_IdTitle(limit, offset);
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

module.exports = {
    getAllActivities_IdTitle
}