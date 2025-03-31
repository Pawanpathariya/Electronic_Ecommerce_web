const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    proname:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    defaultimage:{
        type:String,
        required:true
    },
    trending:{type:String,
        default:false},
})

module.exports=mongoose.model("Product",ProductSchema)