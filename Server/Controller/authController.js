const user = require('../Models/user')
const {hashPassword,comaparePassword} = require('../Helps/auth')
const jwt = require('jsonwebtoken');


const test= (req,res)=>{
    res.json('test is working')
}

const registerUser= async (req,res)=>{
    try {
        console.log("registerUser")
        const {name,email,phone,password,gender,country,age}= req.body;
        if(!name){
            return res.json({
                error:"name is required"
            })
        }
        if(!password || password.length < 8){
            return res.json({
                error : 'Need strong passowrd'
            })
        }
        const exist = await user.findOne({email});
        if (exist) {
            return res.json({
                error: 'Email alredy used'
            })
            
        }


        const hashCurrentPassword = await hashPassword(password)

        const newUser = await user.create({
            name,email,phone,password:hashCurrentPassword,gender,country,age
        })

        res.json(newUser)
    } 
    
    catch (error) {
        console.log(error)
    }

}
 
const loginUser = async (req,res)=>{
    try {
        console.log("loginUser");
        const {phone,password}= req.body
        const loginUser = await user.findOne({phone})
        if(!loginUser){
            return res.json({
                error : 'User not found'
            })
        }

        const match = await comaparePassword(password,loginUser.password)
        if(match){
            const secretKey = '619301832947';
            jwt.sign(
                { email: loginUser.email, id: loginUser._id, name: loginUser.name },
                secretKey,
                {},
                (error, token) => {
                  if (error) throw error;
                  res.cookie('token', token).json(loginUser);
                }
              );
              
        }
    } catch (error) {
        console.log(error);
    }

}

const getProfile =(req,res)=>{
    console.log("chal raha hai getprofile");
    const secretKey = '619301832947';
    const token = req.cookies.token;
    console.log(token);
    console.log("verify token")
    if(token){
        jwt.verify(token,secretKey,{},(err,user)=>{
            if(err) throw err
            res.json(user)
        })
    }
    else{
        res.json(null)
    }
}

module.exports ={
    test,
    registerUser,
    loginUser,
    getProfile
}