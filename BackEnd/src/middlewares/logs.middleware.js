const fs = require ('fs')
const dayjs = require ('dayjs')

const petitionsLog = (req, res, next) => {
    const data = `[${dayjs().format('DD-MM-YYYY HH:mm:ss')}] Método: ${req.method} - Url: ${req.url}\n`;
    
    fs.appendFile('./logs/requests.log', data, (err) => {
    
        if (err) console.log(err);

    });

    next ()
} 

module.exports = {petitionsLog}