const User = require('../Models/UserModel');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

// check if user has access to route by checking if token match
module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({
      status: false
    });
  };

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({
        status: false
      });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        return res.json({
          status: true,
          user: user.username
        });
      } else {
        return res.json({
          status: false
        });
      };
    };
  })
};