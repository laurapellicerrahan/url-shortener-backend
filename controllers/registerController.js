const UserManager = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const postUserController = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const passwordhashed = await bcrypt.hash(password, 10);
    const dbCall = await UserManager.insertUser(firstName, lastName, email, passwordhashed);
    const userId = dbCall._id.toString();
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);//almacenar y cd
    if (dbCall == null) {
        res.status(400).json('Data base call failed').end();
    }
    res.status(200).json({ user: dbCall, token: token }).end();
};

module.exports = postUserController;