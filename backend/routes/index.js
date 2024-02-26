// routes/index.js
const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const cartRoutes = require('./cartRoutes');
const checkoutRoutes = require('./checkoutRoutes');
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');

router.use('/auth', authRoutes);
router.use('/cart', cartRoutes);
router.use('/checkout', checkoutRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;
