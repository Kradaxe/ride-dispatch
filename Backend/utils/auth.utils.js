const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateAuthToken = (userId) => {
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

const comparePassword = async (
    enteredPassword,
    hashedPassword
) => {
    return await bcrypt.compare(
        enteredPassword,
        hashedPassword
    );
};

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

module.exports = {
    generateAuthToken,
    comparePassword,
    hashPassword
};