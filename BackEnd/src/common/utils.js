/**
 * Common functions to be reused along the code
 */


/**
 * Calculates pagination data based on the current page, limit, and total count.

 * @param {number} page - The current page number.
 * @param {number} limit - The number of items per page.
 * @param {number} totalCount - The total number of items.

 * @returns {Object} An object containing pagination information, including current page, total pages, previous page, next page, and limit.
 */

const getPaginationData = (page, limit, totalCount) => {

    const totalPages = Math.floor(totalCount / limit)

    const pagination = {
        'currentPage': page,
        totalPages,
        previousPage : page > 1 ? page - 1 : null,
        nextPage: page < totalPages ? page + 1 : null,
        limit
    }

    return pagination
}



module.exports = getPaginationData