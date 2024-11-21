const getAll = (limit, offset) => {
    return db.query ('select * from users limit ? offset ?', [limit, offset])
}

module.exports = {
    getAll
}