const express=require('express')
const router=express.Router();
const ProductContr=require('../controller/productController')

router.get('/trendingproduct',ProductContr.TrendingProduct)
router.get('/laptop',ProductContr.Laptop)
router.get('/mobile',ProductContr.Mobile)
router.get('/computer',ProductContr.Computer)
router.get('/allproducts',ProductContr.AllProducts)
router.post('/searchproduct',ProductContr.SearchProduct)
module.exports=router;

