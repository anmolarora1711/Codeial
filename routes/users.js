const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller.js');

router.get('/profile', usersController.profile);

module.exports = router;