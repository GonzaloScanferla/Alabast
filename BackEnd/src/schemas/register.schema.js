exports.registerSchema = {
    components: {
        schemas: {
            Register: {
                type: "object",
                required: [
                    "name",
                    "lastname1",
                    "lastname2",
                    "email",
                    "birthdate",
                    "password"
                ],
                properties: {
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
                },
                example: {
                    name: "Rafi",
                    lastname1: "Ferrand",
                    lastname2: "Castillo",
                    email: "rferrand2p@wordpress.com",
                    birthdate: "2001-08-24",
                    password:
                        "NotEncripedPassword123",
                },
            },
        },
    },
};
