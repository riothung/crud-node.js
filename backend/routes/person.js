const router = require("express").Router();
const personController = require("../controller/personController");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/person", personController.getData);
router.post("/person-query", upload.single("file"), personController.createPerson);

module.exports = router;
