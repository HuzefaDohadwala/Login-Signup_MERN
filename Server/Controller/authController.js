const user = require('../Models/user')
const {hashPassword,comaparePassword} = require('../Helps/auth')

const test= (req,res)=>{
    res.json('test is working')
}

const registerUser= async (req,res)=>{
    try {
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
        const {phone,password}= req.body
        const loginUser = await user.findOne({phone})
        if(!loginUser){
            return res.json({
                error : 'User not found'
            })
        }

        const match = await comaparePassword(password,loginUser.password)
        if(match){
            res.json('password match')
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports ={
    test,
    registerUser,
    loginUser
}