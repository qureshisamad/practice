const express = require("express");
const { getAllProducts, removeProduct, findProductById, findProductByName, createProduct, updateProduct } = require("../controllers/ProductsController");
const router = express.Router();


router.route("/").get(getAllProducts);
router.route("/search/:id").get(findProductById);
router.route("/create").post(createProduct);
router.route("/update/:id").patch(updateProduct);
router.route("/remove/:id").get(removeProduct);


module.exports = router;