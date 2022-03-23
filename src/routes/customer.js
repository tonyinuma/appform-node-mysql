const express = require("express");
const customerController = require("../controllers/customerController");
const router = express.Router();

router.get("/", customerController.list);
router.post("/add", customerController.add);
router.get("/delete/:id", customerController.delete);
router.get("/edit/:id", customerController.edit);

module.exports = router;
