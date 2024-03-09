// authMiddleware.js
const jwtUtils = require('../utils/adminToken');

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const user = jwtUtils.verifyToken(token);
        req.user = user;
        next();
    } catch (error) {
        return res.sendStatus(403);
    }
}

module.exports = authenticateToken;
