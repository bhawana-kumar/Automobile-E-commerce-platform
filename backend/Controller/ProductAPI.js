const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('../ConnectionConfig/connection')
const productModel = require('../Model/vehicleSchema');
const userModel= require('../Model/Sellerschema')
const { request } = require('http');
const { response } = require('express');

const ex = express();
ex.use(express.json())
ex.use(cors()) 

//Adding new vehicle
ex.post('/addProduct',async(request,response)=>{
    const product = new productModel(request.body);
    const result = await product.save();
    response.send(result)
})

//Fetching all vehicles
ex.get('/getProduct',async(request,response)=>{
    const result = await productModel.find();
    response.send(result)
})

//Editing existing vehicles
ex.put('/editProduct/:id', async (request, response) => {
    const productId = request.params.id;
    const updatedData = request.body;
    try {
        // Find the product by ID and update it with the new data
        const result = await productModel.findByIdAndUpdate(productId, updatedData, { new: true });
        if (!result) {
            return response.status(404).json({ error: 'Product not found' });
        }
        return response.json(result);
    } catch (error) {
        console.error('Error editing product:', error);
        return response.status(500).json({ error: 'Internal server error' });
    }
});

//Delete vehicle
ex.delete('/deleteProduct/:id', async(request,response) =>{
  const productId = request.params.id;
  try{
    //Find the product by ID and delete it.
    const result = await productModel.findByIdAndDelete(productId);
    if(!result){
        return response.status(404).json({ error : 'Product not found'})
    }
    return response.json({ message :' Product deleted successfully.'});
  } catch(error){
    console.error('Error deleting product: ', error);
    return response.status(500).json({ error :'Internal server error'})
  }
})


//Fetching all users
ex.get('/getSellers', async(request, response) => {
const sellers = await userModel.find();
response.send(sellers)
})


ex.get('/getSellers/:id', async(request,response) => {
    const sellerId = request.params.id;
    const result = await userModel.findById(sellerId);
    response.send(result)
})



//Fetching vehicles data through seller's id
ex.get('/getVehiclesForSeller/:sellerId', async (req, response) => {
    const sellerId = req.params.sellerId;
    
    try {
        const result = await productModel.find({sellerId: sellerId});
        if (result) {
            response.send(result);
        } else {
            response.status(404).send("No product found with the specified sellerId");
        }
  
    } catch (error) {
        console.error("Error fetching vehicles for seller:", error);
        response.status(500).send("Internal server error");
    }
});


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

