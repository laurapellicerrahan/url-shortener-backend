const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const userVerified = jwt.verify(token, process.env.JWT_SECRET);//decodifica y almacena en userId
    req.userId = userVerified.userId;
    next();
  } catch (error) {
    res.status(400).json({ error: "invalid token" });
  }
};

module.exports = validateToken;
