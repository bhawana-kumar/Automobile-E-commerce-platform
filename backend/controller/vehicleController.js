const vehicle = require("../model/vehicleModel");

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
    console.log(result)
    resp.send(result);
};


const postVehicle=async (req, res) => {
    try {
        const { carName, driveType, engine, power } = req.body;

        const vehicles = new vehicle({
            carName, driveType, engine, power
        });

        await vehicles.save();

        res.status(201).json({
            message: 'Vehicle created successfully',
            vehicles
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to create vehicle',
            error: error.message
        });
    }
}

const updateVehicle= async (req, res) => {
    try {
        const carId = req.params.vehicleId;
        const vehicles = await vehicle.findById(carId);
        const { carName, driveType, engine, power } = req.body; 
        if (!vehicles) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        vehicles.carName = carName;
        vehicles.driveType = driveType;
        vehicles.engine = engine;
        vehicles.power = power;

        await vehicles.save();
        res.status(200).json({
            message: 'Vehicle updated successfully',
            vehicles
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update vehicle',
            error: error.message
        });
    }
}


module.exports={ 
    getAllVehicleData,getVehicleById,postVehicle,updateVehicle
}


