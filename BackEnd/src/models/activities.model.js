const getAll = (limit, offset) => {
    return db.query ("select * from activities where active = 1 limit ? offset ?", [limit, offset])
}

module.exports = {
    getAll
}