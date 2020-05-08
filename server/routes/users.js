

// no sql - no table, we are keeping data in JSON format 

const express = require('express');
const router = express.Router();
const { 
  login,
  register } = require('../controllers/users');

router.post('/login', login);
router.post('/register', register);

module.exports = router;