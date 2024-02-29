const bcrypt = require('bcrypt');
const User = require('../models/User');
const config = require('../config/db');

exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", userDetails: user });
      } catch (error) {
        res.status(500).json({ message: "Server Error" });
      }
};

exports.logoutUser = async (req, res) => {
    try {
        // Implement logout functionality (e.g., clear session, invalidate token)
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        // Implement reset password functionality (e.g., send reset link to user's email)
        res.status(200).json({ message: 'Password reset link sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
