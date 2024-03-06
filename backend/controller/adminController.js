
// const{createError }=require('../utils/error')
// const { createSuccess} = require('../utils/success');
const Admin = require("../model/adminModel");
 
const getAdminById = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        if(!user)
            return next(createError(404,"User not found"))
            return res.status(200).send(user)
            //return next(createSuccess(200,"Single user",user))
    } catch (error) {
        return next(createError(500,"Internal Server Error"))
    }
}
module.exports={getAdminById}