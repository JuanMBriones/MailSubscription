'use strict';

const express = require('express');
const userController = require('../controllers/user');
const emailSender = require('../utils/email_sender');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/email', emailSender.sendEmailEveryone); // SEND EMAIL
router.post('/register', userController.register); // REGISTER
router.get('/users', userController.getEmails); // GET USERS

module.exports = router;
