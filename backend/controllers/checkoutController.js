const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { items, total, shippingAddress, paymentMethod, transactionId } = req.body;
        const order = new Order({
            user: userId,
            items,
            total,
            shippingAddress,
            payment: { paymentMethod, transactionId },
            status: 'pending' // Assuming initial status is pending
        });
        await order.save();
        // Clear cart or update product stock quantity
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOrderHistory = async (req, res) => {
    try {
        const userId = req.user.userId;
        const orders = await Order.find({ user: userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
