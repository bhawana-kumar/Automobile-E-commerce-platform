const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('../ConnectionConfig/connection')
const productModel = require('../Model/vehicleSchema');

const { request } = require('http');

const ex = express();
ex.use(express.json())
ex.use(cors()) 


ex.post('/addProduct',async(request,response)=>{
    const product = new productModel(request.body);
    const result = await product.save();
    response.send(result)
})

ex.get('/getProduct',async(request,response)=>{
    const result = await productModel.find();
    response.send(result)
})


ex.get("/getCar", async (req, resp) => {
    try {
        const result = await carModel.find(); 
        resp.send(result);
    } catch (error) {
        resp.status(500).send(error.message);
    }
});


ex.get("/getCar/:id", async (req, resp) => {
        const carId = req.params.id;
        const result = await carModel.findById(carId);
       
        resp.send(result);
});

ex.listen(4000)

