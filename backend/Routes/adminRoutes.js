const express= require('express');
const { signup, login, verifyToken, getSeller } = require('../Controllers/SellerController');
const router= express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', verifyToken, getSeller)
//verify token
module.exports= router