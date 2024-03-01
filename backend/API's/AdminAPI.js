const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('../model/userModel');
const orderModel = require('../model/orderModel');

const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('../ConnectionConfig/connect')
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("Working");
});
// Users 
// get all users data
app.get('/admin/getAllUsersData', async (req, res) => {
    try {
        // Use your userModel to find users
        const result = await userModel.find();
        if(!result){
            return res.status(404).json({message:"Users not found"})
        }
        res.send(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET user by ID
app.get('/admin/getUser/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json( user );
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// PATCH request to update an existing user
app.patch('/admin/updateUser/:userId', async (req, res) => {
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
});

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
app.delete('/admin/deleteUser/:userId', async (req, res) => {
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
});

// Orders
// get all orders data
app.get('/admin/getAllOrdersData', async (req, res) => {
    try {
        // Use your userModel to find users
        const result = await orderModel.find();
        if(!result){
            return res.status(404).json({message:"Users not found"})
        }
        res.send(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET order by ID
app.get('/admin/getOrder/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await orderModel.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json( order );
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

