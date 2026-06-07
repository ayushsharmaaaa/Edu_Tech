// src/controllers/userController.js
const UserModel = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { username, email } = req.body;

        // Identity Verification Business Logic
        const existingUser = await UserModel.findByUsername(username);
        if (existingUser) {
            return res.status(409).json({
                error: "Conflict",
                message: `The username '${username}' is already registered in the system.`
            });
        }

        const newUser = await UserModel.insert({ username, email });
        res.status(201).json(newUser); 
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
};

// Enforce explicit object export syntax to prevent undefined pointer mismatches
module.exports = {
    getAllUsers,
    createUser
};