// .env configuration
process.loadEnvFile();

// server configuration
const http = require("node:http");

const { app } = require("./src/app");

const { swaggerDocs } = require("./swagger");

// Error management middleware
app.use(require("./src/middlewares/errors.middleware"));

// database connection setup
require("./src/config/db");

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

// listener creation
server.listen(PORT);

server.on("listening", () => {
    console.log(`Server listening on port ${PORT}`);
    swaggerDocs(app, PORT);
});
