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
         // Find the user's cart
         let cart = await Cart.findOne({ user: userId });

         // If the user doesn't have a cart, create a new one
         if (!cart) {
             cart = new Cart({ user: userId, items: [] });
         }
 
         // Check if the product exists and is in stock (You need to implement this logic)
         const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        if (product.stock < quantity) {
            return res.status(400).json({ error: "Product is out of stock" });
        }
         // Check if the product is already in the cart
         const existingItemIndex = cart.items.findIndex(item => item.product.toString() === productId);
 
         if (existingItemIndex !== -1) {
             // If the product is already in the cart, update the quantity
             cart.items[existingItemIndex].quantity += quantity;
         } else {
             // If the product is not in the cart, add it
             cart.items.push({ product: productId, quantity });
         }
 
         // Recalculate the cart total (You need to implement this logic)
         let total = 0;
         for (const item of cart.items) {
             const product = await Product.findById(item.product);
             total += product.price * item.quantity;
         }
         cart.total = total;
         // Save the updated cart
         await cart.save();
 
         // Return the updated cart object
         res.status(200).json(cart);
     } 
     catch (error) {
        res.status(500).json({ error: error.message });
    }
};
