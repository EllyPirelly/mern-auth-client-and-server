// handle generation of token
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

module.exports.createSecretToken = (userid) => {
  return jwt.sign({ userid }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};