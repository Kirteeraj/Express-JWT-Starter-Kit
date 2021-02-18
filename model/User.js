const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        min : 6,
        max: 255
    },
    email:{
        type: String,
        required: true,
        max: 255,
        min:6
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6
    },
    date: {
        type:Date,
        default:Date.now()
    },
    active:{
        type:Boolean,
        default:true
    },
    profileId:{
        type:mongoose.Schema.Types.ObjectId,
    }
});

module.exports = mongoose.model('User',userSchema);