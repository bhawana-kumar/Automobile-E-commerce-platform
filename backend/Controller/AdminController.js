
// const{createError }=require('../utils/error')
// const { createSuccess} = require('../utils/success');
const express = require('express');
const cors = require('cors');
const userModel = require('../model/userModel');
const orderModel = require('../model/orderModel');
const vehicleModel = require('../model/vehicleModel');
const reportModel = require('../model/reportModel');

const app = express();
app.use(cors());

// Get all Users
const getAllUserData = async (req, res) => {
    try {
        // Use your userModel to find users
        const result = await userModel.find();
        if (!result) {
            return res.status(404).json({ message: "Users not found" })
        }

        res.send(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
// GET user by ID
const getUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
// PATCH request to update an existing user
const updateUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updates = req.body;

        const updatedUser = await userModel.findByIdAndUpdate(userId, updates, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// POST request to create a new user
// app.post('/admin/createUser', async (req, res) => {
//     try {
//         const userData = req.body;

//         // Use your userModel to create a new user
//         const newUser = await userModel.create(userData);

//         res.status(201).json({ message: 'User created successfully', newUser });
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });
//delete user data
const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await userModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Orders
// get all orders data
const getAllOrdersData = async (req, res) => {
    try {
        // Use your userModel to find users
        const result = await orderModel.find();
        if (!result) {
            return res.status(404).json({ message: "Users not found" })
        }
        res.send(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
// GET order by ID 
const getOrderById = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await orderModel.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(order);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
// Get order by buyerid
const getOrderByBuyerId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await orderModel.find({ buyerId: userId });

        if (!orders) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(orders);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const getOrderBySellerId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await orderModel.find({ sellerId: userId });

        if (!orders) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(orders);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Vehicles
// Get Product all Data 
const getAllVehicleData = async (req, res) => {
    try {
        // Use your userModel to find users
        const result = await vehicleModel.find();
        if (!result) {
            return res.status(404).json({ message: "Products not found" })
        }

        res.send(result);
    } catch (error) {
        console.error('Error fetching Products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getVehicleDataBySellerId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const products = await vehicleModel.find({ sellerId: userId });

        if (!products) {

            return res.status(404).json({ message: 'product not found' });
        }
        res.json(products);
    } catch (error) {

        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getVehicleDataById = async (req, res) => {
    try {
        const vehicleId = req.params.vehicleId;
        const result = await vehicleModel.findById(vehicleId);
        if (!result) {

            return res.status(404).json({ message: 'product not found' });
        }
        res.json(result);
    } catch (error) {
       
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//reports
const getAllReportsData = async (req, res) => {
    try {
        
        const result = await reportModel.find();
        if (!result) {
            return res.status(404).json({ message: "reports not found" })
        }
        res.send(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getReportsDataByVehicleId = async(req,res) => {
    try {
        const vehicleId = req.params.vehicleId;
        const result = await reportModel.find({vehicleId: vehicleId});
        if (!result) {
            return res.status(404).json({ message: 'No reports' });
        }
        res.json(result);
    } catch (error) {
       
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = {
    getAllUserData,
    getUserById, updateUserById, deleteUserById, getAllOrdersData,
    getOrderById, getOrderByBuyerId, getOrderBySellerId, getAllReportsData,
    getVehicleDataBySellerId, getAllVehicleData,getVehicleDataById,getReportsDataByVehicleId
}