const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('../ConnectionConfig/connect');
const ProductModel = require('../model/ProductModel');

//express
const ex = express();
ex.use(express.json());
ex.use(cors());

//api
ex.post('/addProduct',async(req,res)=>{
    const product= new ProductModel(req.body);
    const result = await product.save();
    res.send(result);
})


ex.get('/getProduct',async(req,res)=>{
    const result = await ProductModel.find();
    res.send(result);
})
const PORT = process.env.PORT || 4000;

ex.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
