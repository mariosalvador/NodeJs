const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require:true,
        },
        email:{
            type: String,
            require:true,
        },
        password:{
            type: String,
            require:true,
            minlenght:7
        }
    }
)

const UserModel= mongoose.model('User', userSchema);
module.exports=UserModel;