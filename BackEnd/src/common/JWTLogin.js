const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

/**
 * Creates a JWT based on the provided user object and the `rememberSession` flag. *
 * The token payload contains the user's ID and name along with the expiration time.
 *
 * @param {Object} user The user object containing user data.
 * @param {boolean} rememberSession A flag indicating whether to generate a long-lived token.
 *
 * @returns {string} The generated JWT token string.
 */
const createToken = (user, rememberSession) => {
  // Defines the expiration of the JWT to 30 days if rememperSession boolean = true
  // 22/11/2024 : TEMPORARLY FOR DEV PURPOSES rememberSession IS SET TO true  and expiration to 999) 
  rememberSession = true
  
  const expiration = rememberSession
    ? dayjs().add(999, "day")
    : dayjs().add(1, "day");
  
  const payload = {
    exp: expiration.unix(),
    id: user.id,
    name: user.name,
  };

  return jwt.sign(payload, process.env.PRIVATE_KEY)
}

module.exports = {createToken}