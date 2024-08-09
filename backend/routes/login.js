const router = require("express").Router();
const loginController = require("../controller/loginControllers");

router.get("/login", loginControllers.loginUser);

module.exports = router;
