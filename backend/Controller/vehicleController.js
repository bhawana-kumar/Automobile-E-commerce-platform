const vehicle = require("../model/vehiclemodel");
const productModel = require('../model/vehiclemodel')

const getAllVehicleData = async (req, resp) => {
    try {
        const result = await vehicle.find();
        resp.send(result);
    } catch (error) {
        resp.status(500).send(error.message);
    }
};

const getVehicleById= async (req, resp) => {
    const carId = req.params.vehicleId;
    const result = await vehicle.findById(carId);
    console.log(carId);
    // console.log(typeof(card));
    console.log(result)
    resp.send(result);
};

const postVehicle = async (request, response) => {
    try {
        // Assuming the seller's ID is stored in the request body as sellerId
        const sellerId = request.body.sellerId;
        console.log(sellerId); // Ensure sellerId is fetched correctly
        // Create a new vehicle instance with the seller's ID attached
        const product = new productModel({
            ...request.body,
            sellerId: sellerId
        });
        // Save the new vehicle to the database
        const result = await product.save();
        response.send(result);
    } catch (error) {
        console.error('Error adding product:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
}






///put req 

const updateVehicle= async (request, response) => {
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
}

const deleteVehicle=  async(request,response) =>{
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
  }

  const getVehicleDataBySellerId=async (req, response) => {
    const sellerId = req.params.sellerId;
    console.log(sellerId);
    
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
}
module.exports={ 
    getAllVehicleData,getVehicleById,postVehicle,updateVehicle,deleteVehicle,getVehicleDataBySellerId
}


