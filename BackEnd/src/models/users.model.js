/**
 * Retrieves all users with pagination (limited number of users, starting from a specified offset).
 *
 * @param {number} limit The maximum number of users to retrieve.
 * @param {number} offset The starting index for the retrieved users.
 *
 * @returns {Promise<Array>} A Promise that resolves to an array of user objects.
 */
const getAll = (limit, offset) => {
    return db.query("select * from users limit ? offset ?", [limit, offset]);
};

/**
 * Retrieves a user from the database based on the provided ID.
 *
 * @param {number} id The ID of the user to retrieve.
 *
 * @returns {Promise<Array>} A Promise that resolves to an array containing the user object.
 */
const getById = (id) => {
    return db.query("select * from users where id = ?", [id]);
};

const getByEmail = (email) => {
    return db.query("select * from users where email = ?", [email]);
};

/**
 * Creates a new user with the provided information.
 *
 * @param {Object} user The user object containing the following properties:
 *   - `name`: The user's name.
 *   - `lastname1`: The user's first last name.
 *   - `lastname2`: The user's second last name.
 *   - `email`: The user's email address.
 *   - `birthdate`: The user's birthdate.
 *   - `password`: The user's password.
 *
 * @returns {Promise<Array>} A Promise that resolves to an array containing the result of the insert operation.
 */
const createNew = ({
    name,
    lastname1,
    lastname2,
    email,
    birthdate,
    password,
}) => {
    return db.query(
        "insert into users (name, lastname1, lastname2, email, birthdate, password) values (?, ?, ?, ?, ?, ?) ",
        [name, lastname1, lastname2, email, birthdate, password]
    );
};

module.exports = {
    getAll,
    getById,
    getByEmail,
    createNew,
};
