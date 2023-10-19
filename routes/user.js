const path=require('path')

const express=require('express')

const userController=require('../controllers/user')

const router=express.Router();


router.post('/Add-expense',userController.addexpense)

router.get('/Get-expense',userController.getexpense)

router.delete('/Delete-expense/:id',userController.deleteexpense)

module.exports=router

