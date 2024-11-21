const express = require ('express')
const cors = require ('cors')

const app = express()
app.use (express.json())
app.use (cors())

app.use (require('./middlewares/errors.middleware'))

const {petitionsLog} = require('./middlewares/logs.middleware')
app.use (petitionsLog)

app.use('/api', require('./routes/api'))

module.exports = app