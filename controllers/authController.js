
import jwt from 'jsonwebtoken';

// Dummy user (replace with DB logic later)
const USER = {
  email: "test@example.com",
  password: "123456",
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};

export const logout = (req, res) => {
  // For JWT, logout is frontend-based (just delete token)
  res.status(200).json({ message: "Logged out successfully (token removed on client)" });
};
