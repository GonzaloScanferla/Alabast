/**
 * Gets the total count of records in a specified table.
 *
 * @param {string} table - The name of the table to query.
 * @returns {Promise<number>} A Promise that resolves to the total count of records in the table.
 */
const getAllCount = (table) => {
    return db.query ('select count (*) as count from ??', [table])
}


module.exports = {
    getAllCount
}