// src/middlewares/validate.js

const validateUserRegistration = (req, res, next) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).json({
            error: "Bad Request",
            message: "Properties 'username' and 'email' are mandatory requirements."
        });
    }

    if (username.includes("<") || username.includes(">")) {
        return res.status(422).json({
            error: "Unprocessable Entity",
            message: "Malicious characters intercepted. Input execution blocked."
        });
    }

    next();
};

// Explicit object export contract
module.exports = { 
    validateUserRegistration 
};