const fs = require ('fs')
const dayjs = require ('dayjs')

/**
 * Middleware function taht logs the date, time, HTTP method, and URL of each incoming request to a file named `requests.log`.
 *
 * @param {import('express').Request} req The Express request object.
 * @param {import('express').Response} res The Express response object.
 * @param {import('express').NextFunction} next The Express next function.
 */
const petitionsLog = (req, res, next) => {
    const data = `[${dayjs().format('DD-MM-YYYY HH:mm:ss')}] Método: ${req.method} - Url: ${req.url}\n`;
    
    fs.appendFile('./logs/requests.log', data, (err) => {
    
        if (err) console.log(err);

    });

    next ()
} 

module.exports = {petitionsLog}