const express = require ("express");

const router = express.Router();

const productController = require ("../controllers/productController");

// connecting all controllers from product controller to router
router.post ("/products", productController.createProduct);

router.get ("/products", productController.products);

router.get ("/products/:id", productController.singleProduct);

router.delete ("/products/:id", productController.deleteProduct);

router.put ("/products/:id", productController.updateProduct);

module.exports = router;