//Controller to be added
const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
require('../ConnectionConfig/connection')
const productModel=require('../Model/vehicleSchema')

const app=express();
app.use(express.json())
app.use(cors())
app.post("/insertProduct",async(req,resp)=>{
    const product=new productModel(req.body);
    console.log(product+" product is ");
    console.log(req.body+" product is ");
    const result=await product.save();
    resp.send(result)
})

app.get("/getProduct",async(req,resp)=>{
    const result=await productModel.find();
    resp.send(result);
})

app.delete("/deleteProduct/:pid",async (req,resp)=>{
    // console.log(req.params.pid);
    const result=await productModel.deleteOne(
        {'productId':req.params.pid}
        )
        resp.send(result)
})


app.listen(4000,function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 4000);
}
   )
