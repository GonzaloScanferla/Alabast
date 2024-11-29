exports.usersSchema = {
    components: {
        securitySchemes: {
            Authorization: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
        schemas: {
            User: {
                type: "object",
                required: [
                    "id",
                    "name",
                    "lastname1",
                    "lastname2",
                    "email",
                    "birthdate",
                    "password",
                    "active",
                ],
                properties: {
                    id: {
                        type: "integer",
                        description: "The auto-generated id of the user",
                    },
                    name: {
                        type: "string",
                        description: "User's first name",
                    },
                    lastname1: {
                        type: "string",
                        description: "User's first last name",
                    },
                    lastname2: {
                        type: "string",
                        description: "User's second last name",
                    },
                    email: {
                        type: "string",
                        description: "User's email",
                    },
                    birthdate: {
                        type: "string",
                        format: "date",
                        description: "User's birth date",
                    },
                    password: {
                        type: "string",
                        description: "Encrypted user password",
                    },
                    active: {
                        type: "integer",
                        description:
                            "User's state (1 - active, 0 - deactivated)",
                    },
                },
                example: {
                    id: 98,
                    name: "Rafi",
                    lastname1: "Ferrand",
                    lastname2: "Castillo",
                    email: "rferrand2p@wordpress.com",
                    birthdate: "2001-08-24",
                    password:
                        "$2a$10$mW/KU0DD.GzGKAGGaPa6LebjRD3QxhyED1keIiO3wZ4qNvFZrlWyC",
                    active: 1,
                },
            },
        },
    },
};
