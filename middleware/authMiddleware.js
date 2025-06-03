
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) return res.status(401).json({ message: 'Unauthorized' });

  const token = bearer.split(' ')[1];

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(403).json({ message: 'Invalid token' });
  }
};
