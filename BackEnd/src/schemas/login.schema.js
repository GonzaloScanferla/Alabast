exports.loginSchema = {
    components: {
        schemas: {
            Login: {
                type: "object",
                required: [
                    "email",
                    "password",
                    "rememberSession"
                ],
                properties: {
                    email: {
                        type: "string",
                        description: "User's email",
                    },
                    password: {
                        type: "string",
                        description: "User's password",
                    },
                    rememberSession: {
                        type: "boolean",
                        description: "If true, the session token will expire in 60 days, otherwise the expiration will be set to 1 day",
                    },
                },
                example: {
                    email: "rferrand2p@wordpress.com",
                    password:
                        "NotEncripedPassword123",
                    rememberSession: true
                },
            },
        },
    },
};
