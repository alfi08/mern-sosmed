const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const createToken = require("../utils/createToken");

module.exports = {
  // auto login
  autoLogin: async (req, res) => {
    const doc = await User.findById(req.user.id).select("-password");
    res.json(doc);
  },

  // sign in
  signIn: async (req, res) => {
    try {
      const { username, password } = req.body;

      // check fields
      if (!username || !password) {
        return res
          .status(400)
          .json({ status: "FAILED", message: "Check Your Fields!" });
      }

      // check if password is match
      const isPasswordMatch = await bcrypt.compare(password, userData.password);
      if (!isPasswordMatch)
        return res.status(400).json({
          status: "FAILED",
          message: "username or password is invalid",
        });

      const token = createToken({ id: userData._id });
      res.json({
        message: "login success ",
        user: { username: userData.username, id: userData._id },
        token,
      });
    } catch (err) {
      throw err;
    }
  },

  // sign up
  signUp: async (req, res) => {
    try {
      const { username, email, fullname, password } = req.body;

      if (!email || !password || !username || !fullname) {
        return res.status(400).json({ message: "check your fields!" });
      }

      const salt = await bcrypt.genSalt(10);

      const passHash = await bcrypt.hash(password, salt);
      const newUser = await new User({
        email,
        username,
        fullname,
        password: passHash,
      }).save();

      const token = createToken({ id: newUser._id });
      res.json({ message: "register success ", id: newUser._id, token });
    } catch (err) {
      throw err;
    }
  },

  // for live check field in username or email
  fieldExist: async (req, res) => {
    try {
      const { email, username } = req.body;
      let field, msg;
      if (email) {
        field = { email: email };
        msg = "email";
      } else {
        field = { username: username };
        msg = "username";
      }

      const check = await User.findOne(field);
      if (check)
        return res
          .status(400)
          .json({ status: "FAILED", message: `${msg} is already exist` });
    } catch (err) {
      throw err;
    }
  },
};
