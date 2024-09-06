const jwt = require('jsonwebtoken');
let { JWT_SECRET } = process.env;

const validateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err)
            return res.status(401).end();

        req.id = decoded.id;
        next();
    });
};

module.exports = validateToken;
