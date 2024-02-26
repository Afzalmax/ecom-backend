const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');

router.post('/place-order', checkoutController.placeOrder);
router.get('/order-history', checkoutController.getOrderHistory);
// Add more routes for managing orders, updating shipping address, etc.

module.exports = router;