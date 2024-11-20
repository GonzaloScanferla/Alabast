// .env configuration
process.loadEnvFile()

// server configuration
const http = require('node:http')

const app = require('./src/app')

// Error management middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// database connection setup
require ('./src/config/db')


const server = http.createServer(app)

const PORT = process.env.PORT || 3000

// listener creation
server.listen(PORT);

server.on ('listening', () => {
    console.log (`Server listening on port ${PORT}`)
})
