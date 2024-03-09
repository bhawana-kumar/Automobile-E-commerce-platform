const mongoose=require('mongoose')
const orderSchema=mongoose.Schema(
    {
        "dateTime":String,
        "orderId":String,
        "buyerId":String,
        "buyer":Object,
        "sellerId":String,
        "seller":String,
        "vehicle":Object,
        "price":String
    }
)
module.exports=mongoose.model("order",orderSchema)



// Define route to render order profile page


// Start the server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });