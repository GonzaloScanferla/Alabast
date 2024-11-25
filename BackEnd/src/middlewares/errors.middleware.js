/**
 * Middleware function to handle errors that occur within the application.
 * It sets a 500 Internal Server Error status code and sends a JSON response containing the error message.
 *
 * @param {Error} err The error object.
 * @param {import('express').Request} req The Express request object.
 * @param {import('express').Response} res The Express response object.
 * @param {import('express').NextFunction} next The Express next function.
 */
const errorsMiddleware = (err, req, res, next) => {
    res.status(500).json({ error: err.message });
};

module.exports = errorsMiddleware;
