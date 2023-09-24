const bcrypt = require('bcrypt');

const hashPassword = (passowrd)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(12,(err,salt)=>{
            if (err) {  
                reject(err)
            }
            bcrypt.hash(passowrd,salt,(err,hash)=>{
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

const comaparePassword = (passowrd,hashed)=>{
    return bcrypt.compare(passowrd,hashed)
}

module.exports={
    hashPassword,
    comaparePassword
}