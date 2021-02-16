const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const {
  autoLogin,
  signIn,
  signUp,
  fieldExist,
} = require("../controllers/userController");

router.get("/auto-login", isAuth, autoLogin);
router.post("/login", signIn);
router.post("/register", signUp);
router.get("/check-field", fieldExist);

module.exports = router;
