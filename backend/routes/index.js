const router = require("express").Router();
const personRouter = require("./person");
const userRouter = require("./user");

router.use(personRouter);
router.use(userRouter);

module.exports = router;
