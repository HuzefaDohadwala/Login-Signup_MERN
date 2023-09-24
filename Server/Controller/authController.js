const user = require('../Models/user')

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
        const newUser = await user.create({
            name,email,phone,password,gender,country,age
        })

        res.json(newUser)
    } 
    
    catch (error) {
        console.log(error)
    }

}
 

module.exports ={
    test,
    registerUser
}