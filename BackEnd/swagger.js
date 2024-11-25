const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const { usersSchema } = require("./src/schemas/users.schema");

//Metadata info about API
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Alabast API",
            version: "1.00",
            description: "Node JS Express API for Alabast MySql database",
            contact: {
                name: "Alabast by Gonzalo Scanferla",
                url: "-",
                email: "gonzalo.scanferla@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
        tags: [
            {
                name: "users",
                description: "All the information about the users",
            },
            {
                name: "profiles",
                description:
                    "All the information about the public profile of the users",
            },
            {
                name: "advertisersProfiles",
                description:
                    "All the information about the public profile as the sellers",
            },
        ],
        ...usersSchema,
    },
    apis: ["./src/routes/api/*.js"],
};

//Docs en JSON format
const swaggerSpec = swaggerJSDoc(options);

//Function to setup our docs
const swaggerDocs = (app, port) => {
    app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    console.log(
        `Version 1.0.0 Docs are availabe at http://localhost:${port}/api/docs`
    );
};

module.exports = { swaggerDocs };
