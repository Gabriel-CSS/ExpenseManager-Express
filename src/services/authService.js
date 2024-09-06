const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
require('dotenv').config();

let { JWT_SECRET } = process.env;

async function encryptPassword(password) {
    if (!password) {
        throw new Error('Invalid password');
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    return encryptedPassword;
}

async function authenticate(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    return token;
}

module.exports = {
    encryptPassword, authenticate
};
