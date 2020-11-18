const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/", adminController.showIndexAdmin);
router.get("/addProduct", adminController.showAddProductAdmin);
router.post("/addProduct/addProduct", adminController.addProduct);
router.get("/deleteProducts", adminController.showDeleteProducts);
router.get("/deleteProducts/deleteProduct/:productId", adminController.deleteProduct);
router.get("/editProducts", adminController.showEditProducts);
router.get("/editProducts/editProduct/:productId", adminController.editProduct);
router.post("/editProducts/editProduct/save/:productId", adminController.save);

module.exports = router;
