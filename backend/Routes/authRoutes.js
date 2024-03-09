// authRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/adminModel');
const jwtUtils = require('../utils/adminToken');

// router.post('/register', async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = await User.create({ username, email, password: hashedPassword });
//         const token = jwtUtils.generateToken({ id: user._id, username: user.username });
//         res.json({ token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// });

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(401).send('Invalid email or password');

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(401).send('Invalid email or password');

        const token = jwtUtils.generateToken({ id: user._id, username: user.username });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
