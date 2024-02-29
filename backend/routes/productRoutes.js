// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.post('createproduct',productController.registerProduct);
// Add more routes for managing products (e.g., adding, updating, deleting)

module.exports = router;
