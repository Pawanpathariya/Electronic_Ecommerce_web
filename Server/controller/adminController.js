const ProductModel=require("../model/ProductModel");

const AdminLogin=async(req,res)=>{
    const {username,password}=req.body;
try {
    if(username!="admin"){
        res.status(400).send({message:"Invalid username"})
    }
    else if(password!="admin123"){
    res.status(400).send({message:"Invalid password"})
    }
    else{
        res.status(200).send({message:"Login successful",user:"admin"})
    }
} catch (error) {
    res.status(500).send({message:"Internal server error"})
}
}

const InsertProduct=async(req,res)=>{
    try {
        const {proname,brand,category,description,price}=req.body;
        const imageUrls = req.files.map(file => file.path);
        const defaultimage=imageUrls[0];
        await ProductModel.create({proname,brand,category,description,price,defaultimage,images:imageUrls});
        res.status(200).send({message:"Product is inserted"});
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
}


const DisplayProduct=async(req,res)=>{
    try {
        const products=await ProductModel.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
    }
module.exports={
    AdminLogin,
    InsertProduct,
    DisplayProduct
}