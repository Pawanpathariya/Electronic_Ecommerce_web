const mongoose=require('mongoose')

const OrderSchema=new mongoose.Schema({
totalamount:{
    type:Number,
    required:true
},
productname:{
    type:String,
    required:true
},
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
Date:{
    type:Date,
    default:Date.now
}
})

module.exports=mongoose.model("Oredr",OrderSchema)