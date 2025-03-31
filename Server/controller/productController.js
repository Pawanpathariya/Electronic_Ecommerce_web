const ProductModel =require('../model/ProductModel')
const TrendingProduct=async(req,res)=>{
    try {
        const products=await ProductModel.find({trending:"true"});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({message:"Internal server error"});
    }
}


module.exports={
    TrendingProduct
}