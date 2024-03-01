const Seller= require("../Models/SellerModel");
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");
const JWT_SECRET_KEY="mykey" //prefer to store secret key in .env file 

const signup = async (req, res, next )=>{
    const {username, email, password}=req.body; //destructuring everything from the request body 
    let existingUser;
    try{
        existingUser= await Seller.findOne({email:email});
    }catch (err){
        //console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message:"User already "})
    }

    const hashedPassword= bcrypt.hashSync(password)


    const seller=new Seller({
        username,
        email,
        password: hashedPassword

    });

    try{
        await seller.save();
    } catch (err){
        console.log(err);
    }

    return res.status(201).json({message:seller})
   

}; 


const login = async (req, res, next)=>{
    const {email, password}= req.body

    let existingUser;
    try{
        existingUser= await Seller.findOne({email: email})
    }catch(err){
        return new Error(err);
    }

    if(!existingUser){
        return res.status(400).json({message:"user not found. Signup please"})
    }

    const isPasswordCorrect= bcrypt.compareSync(password, existingUser.password);

    if(!isPasswordCorrect){
        return res.status(400).json({message:'Invalid Email/ Password'})
    }

    const token=jwt.sign({id:existingUser._id}, JWT_SECRET_KEY, {
        expiresIn:"30s"
    })

    res.cookie(String(existingUser._id), token,{
        path:'/',
        expires: new Date(Date.now()+1000*30),
        httpOnly: true,
        sameSite: 'lax'
    })


    return res.status(200).json({message:'successfully logged in ', seller: existingUser, token})

}


const verifyToken =(req, res, next)=>{
    const cookies=req.headers.cookie;
    const token = cookies.split('=')[1];
    console.log(token);

    if(!token){
        res.status(404).json({message:"No token found"})
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (err, seller)=>{
       if(err){
         return res.status(400).json({message:"Invalid token"})
        }

        console.log(seller.id);
        req.id=seller.id;
    })
    next()  
}


const getSeller =async (req,res, next)=>{
    const sellerId= req.id;
    let seller;
    try{
        seller= await Seller.findById(sellerId, "-password")
    }catch(err){
        return new Error(err)
    }

    if(!seller){
        return res.status(404).json({message:"User not found "})
    }

    return res.status(200).json({seller})


}

exports.signup = signup;
exports.login= login;
exports.verifyToken=verifyToken;
exports.getSeller=getSeller