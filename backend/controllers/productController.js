const Product = require('../models/Product');
const config = require('../config/db');

exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, size, category, image, stockQuantity  } = req.body;
        const product = new Product({ name, description, price, size, category, image, stockQuantity  });
        await product.save();
        res.status(201).json({ message: 'Product registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
