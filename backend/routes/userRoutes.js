// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.editUser);
router.delete('/:userId', userController.deleteUser);
// Add more routes for managing user profile, favorites, etc.

module.exports = router;
