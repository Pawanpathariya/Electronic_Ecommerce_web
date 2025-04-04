const express=require('express')
const router=express.Router();
const userController=require('../controller/userController');
router.post("/login",userController.Login)
router.post("/register",userController.Register)
router.post("/userauthenticate",userController.userAuthenticate)
router.post("/googlelogin",userController.Googlelogin)
router.post("/getuser",userController.GetUser)
module.exports=router;