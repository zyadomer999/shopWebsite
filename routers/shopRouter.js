const express = require("express");
const router = express.Router();

const shopControllers = require("../controllers/shopController");

router.get("/", shopControllers.showProducts);

module.exports = router;
