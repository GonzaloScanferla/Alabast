const jwt = require('jsonwebtoken')
 
/**
 * Middleware function that verifies the presence and validity of a JWT token in the `Authorization` header.
 * If the token is valid, it decodes the payload and attaches it to the `req.user` object for subsequent middleware or route handlers.
 *
 * @param {import('express').Request} req The Express request object.
 * @param {import('express').Response} res The Express response object.
 * @param {import('express').NextFunction} next The Express next function for middleware chaining.
 *
 * @returns {void}
 */
const checkToken = (req, res, next) => {
  if (!req.headers["authorization"])
    return res.status(403).json({ error: "Invalid API key" });

  const token = req.headers["authorization"];

  let payload;
  try {
    payload = jwt.verify(token, process.env.PRIVATE_KEY);
  } catch (error) {
    return res.status(403).json(error)
  }

  req.user = payload;

  next();
};

module.exports = {
    checkToken
}
