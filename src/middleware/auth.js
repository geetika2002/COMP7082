const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: 'Access token missing or invalid' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret key
        req.user = decoded; // Attach user data (e.g., user ID) to the request
        next(); // Proceed to the next middleware/route
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
