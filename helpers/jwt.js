const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

const createToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '24h' });
};

const createTokenForgetPwd = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '15m' });
};
const verifyToken = (token) => {
    return jwt.verify(token, secretKey);
};

module.exports = { createToken, verifyToken, createTokenForgetPwd };
