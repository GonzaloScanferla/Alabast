const express = require ('express')
const cors = require ('cors')

const app = express()
app.use (express.json())
app.use(cors())

app.use (require ('./middlewares/errors.middleware'))

app.use('/api', require('./routes/api'))

module.exports = app