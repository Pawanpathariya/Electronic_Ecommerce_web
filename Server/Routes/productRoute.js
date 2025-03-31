const express=require('express')
const router=express.Router();
const ProductContr=require('../controller/productController')

router.get('/trendingproduct',ProductContr.TrendingProduct)


module.exports=router;

