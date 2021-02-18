const { string } = require('@hapi/joi');
const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    imagePath:{
        type: String,
        default:'<path to avatar image>'
    },
    intro:{
        type:String,
        max:100,
        default:'5amier'
    },
    place:{
        type:String,
        max:200,
        default:'-'
    },
    waNumber:{
        type:String, // validation done by joi - helper
        required:true
    },
    wakeUpNumber:{
        type:String,
        reduired:true
    },
    scrrible:{
        type:String,
        default:'-'
    },
    updated: { type: Date, default: Date.now },
});


module.exports = mongoose.Model('Profile',profileSchema);