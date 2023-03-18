const mongoose = require('mongoose');
const connectDB = require('../config/db');

const userSchema = require('./schemas/user');

class UserManager {
    static insertUser = async (firstName, lastName, email, password) => {
        connectDB();
        const dbCall = await userSchema.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        return dbCall
    }
}

module.exports = UserManager;