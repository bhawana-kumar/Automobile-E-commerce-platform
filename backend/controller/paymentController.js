const Payment = require("../model/paymentModel");

const postPayment = async (req, res) => {
    try {
        console.log('Request Body:', req.body); 
        const { paymentId, amount, currency, customerName, customerEmail, customerContact, paymentStatus } = req.body;

        const payments = new Payment({
            paymentId, amount, currency, customerName, customerEmail, customerContact, paymentStatus
        });

        await payments.save();

        res.status(201).json({
            message: 'Payment created successfully',
            payment: payments 
        });
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({
            message: 'Failed to create payment',
            error: error.message
        });
    }
};

module.exports = { postPayment}; 
