const ProductModel =require('../model/ProductModel')
const TrendingProduct=async(req,res)=>{
    try {
        const products=await ProductModel.find({trending:"true"});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({message:"Internal server error"});
    }
}
const Laptop=async(req,res)=>{
    try {
        const products=await ProductModel.find({category:"laptop"});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({message:"Internal server error"});
    }
}
const Mobile=async(req,res)=>{
    try {
        const products=await ProductModel.find({category:"mobile"});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({message:"Internal server error"});
    }
}

const Computer=async(req,res)=>{
    try {
        const products=await ProductModel.find({category:"computer"});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({message:"Internal server error"});
    }
}

const AllProducts=async(req,res)=>{
    try {
        const products=await ProductModel.find({});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({message:"Internal server error"});
    }
}


const SearchProduct=async(req,res)=>{
    const {proname,category}=req.body;
    try {
        const products = await ProductModel.find({
            $and: [
                { proname: proname} ,
                { category:  category}
            ]
        });
        if(products.length===0){
            res.status(400).send({message:"Product not found"});
        }
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({message:"Internal server error"});
    }
}


module.exports={
    TrendingProduct,
    Laptop,
    Mobile,
    Computer,
    AllProducts,
    SearchProduct
}