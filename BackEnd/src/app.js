// Express
const express = require("express");
const app = express();
app.use(express.json());

// Cors
const cors = require("cors");
app.use(cors());

// Errors and logs middlewares
app.use(require("./middlewares/errors.middleware"));
const { petitionsLog } = require("./middlewares/logs.middleware");
app.use(petitionsLog);

app.use("/api", require("./routes/api"));

module.exports = { app };
