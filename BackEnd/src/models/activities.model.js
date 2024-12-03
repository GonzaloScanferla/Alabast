const getAll_IdTitle = (limit, offset) => {
    return db.query ("select id, title from activities where active = true limit ? offset ?", [limit, offset])
}

module.exports = {
    getAll_IdTitle
}