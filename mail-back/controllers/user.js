"use strict";
const User = require('../database/models/user');
var mongoose = require('mongoose');
const { sendEmail } = require('../utils/email_sender');

const register = (req, res) => {
  let body = req.body;
  let email = body.email;

  let user = new User({
    email: email,
    is_deleted: false
  });

  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    sendEmail(email).catch(console.error);
    res.status(201).json({
      ok: true,
      user: userDB
    });
  });
}

const getUsers = async () => {
  try {
    return await (await User.find({ is_deleted: false }, 'email')).map(element => {
      return element.email;
    });
  } catch (err) {
    return err;
  }
}

const getEmails = async (req, res) => {
  const emails = await getUsers();

  res.status(200).json({
    mails: emails
  });
}

module.exports = {
  register, 
  getUsers,
  getEmails
};
