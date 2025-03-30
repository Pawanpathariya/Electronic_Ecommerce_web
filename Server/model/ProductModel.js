const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    proname:String,
    brand:String,
    category:String,
    description:String,
    price:String,
    images:[String]
})

module.exports=mongoose.model("Product",ProductSchema)