const mongoose=require('mongoose')
const validator= require('validator')
const User = require('../models/userModel')
const Errorhandler = require("../middleware/errorHandler")
exports.createUser=(async(req,res,next)=>{
    const user =new User(req.body)

        try{
            await user.save()
           
            res.status(201).send({ user })
        } catch(e){
               
                res.status(400).send("Duplicate Email or phone no entered")
        }
});


