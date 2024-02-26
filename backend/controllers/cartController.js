const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
    try {
        const userId = req.user.userId; // Assuming userId is added to the request object by the authentication middleware
        const cart = await Cart.findOne({ user: userId }).populate('items.product');
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addToCart = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { productId, quantity } = req.body;
        // Check if product exists and is in stock
        // Update or create cart item accordingly
        // Recalculate cart total
        // Save cart and return updated cart object
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
