/**
 * Retrieves all active activities with pagination.
 * 
 * @param {number} limit - The maximum number of activities to retrieve.
 * @param {number} offset - The number of activities to skip before starting to collect the result set.
 * @returns {Promise} - A promise that resolves to the result of the database query.
 */
const getAll = (limit, offset) => {
    return db.query ("select * from activities where active = 1 limit ? offset ?", [limit, offset])
}

/**
 * Retrieves active activities by category with pagination.
 * 
 * @param {string} category - The category of activities to retrieve.
 * @param {number} limit - The maximum number of activities to retrieve.
 * @param {number} offset - The number of activities to skip before starting to collect the result set.
 * @returns {Promise} - A promise that resolves to the result of the database query.
 */
const getByCategory = (category, limit, offset) => {
    return db.query("select * from activities where active = 1 and category_id = ? limit ? offset ?", [category, limit, offset]);
}

const getCategories = () => {
    return db.query("select * from categories")
}


module.exports = {
    getAll,
    getByCategory,
    getCategories
}