const router = require("express").Router();
const personController = require("../controller/personController");

router.get("/person-query", personController.getPerson);
router.get("/person-query", personController.createPerson);

module.exports = router;
