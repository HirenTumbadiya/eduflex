const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your-secret-key');
    const user = await User.findOne({ _id: decoded.userId, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).json({ error: 'Not authorized' });
  }
};

const adminAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your-secret-key');
    const user = await User.findOne({ _id: decoded.userId, 'tokens.token': token });

    if (!user || user.role !== 'admin') {
      throw new Error();
    }

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).json({ error: 'Not authorized as admin' });
  }
};

module.exports = { authMiddleware, adminAuthMiddleware };
