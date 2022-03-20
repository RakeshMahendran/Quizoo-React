const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    createdAT:{
        type:Date,
       default:new Date()
    },
    avatar:{
        type:Object,
        required:true,
        contains:{
            url:{
                type:String
            },
            publicle:{
                type:String
            }
        }
    },
    deleted:{
        type:Boolean,
        default:false
    }
   

})
 
module.exports = User = mongoose.model('Users',userSchema);