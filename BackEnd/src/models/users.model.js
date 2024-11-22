const getAll = (limit, offset) => {
    return db.query ('select * from users limit ? offset ?', [limit, offset])
}

const getById = (id) => {
    return db.query ('select * from users where id = ?', [id])
}

const createNew = ({name, lastname1, lastname2, email, birthdate, password}) => {
    return db.query ('insert into users (name, lastname1, lastname2, email, birthdate, password) values (?, ?, ?, ?, ?, ?) ', [name, lastname1, lastname2, email, birthdate, password])
}

module.exports = {
    getAll,
    getById,
    createNew
}