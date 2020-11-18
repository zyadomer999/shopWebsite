const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.get("/", cartController.showCartIndex);

router.get("/addToCart/:productId", cartController.addToCart);
router.get("/removeFromCart/:productId", cartController.removeFromCart);

module.exports = router;
