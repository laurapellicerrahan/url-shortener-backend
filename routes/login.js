const express = require('express');
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT.js");
const authController = require('../controllers/authController');

router.post('/', authController.login);

router.get('/', verifyJWT, (req, res) => {
  res.json({ message: 'Este endpoint está protegido por token' });
});

module.exports = router;