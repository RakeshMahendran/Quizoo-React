const express = require('express');
const Users = require('../models/Users');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth')
const{loginValidator,registerValidator}=require('../validators/validators');

const router = express.Router();

router.post('/register',(req,res)=> {
    const{errors,inValid} = registerValidator(req.body);
   if (!isValid) {
        res.json({success:false, errors}); 
    }else {
        const {firstName, lastName, email, password} = req.body;
     const registerUser = new Users ({
            firstName,
            lastName,
            email,
            password,
            createdAt: new Date()
        })
        .then(console.log("Dont give error"))
        .catch((err) => console.log(err))
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(registerUser.password, salt, (hashErr, hash) => {
            if (err || hashErr) {
                res.json({message : "Error occured hasing" , success : false });
        return;
            }
        registerUser.password = hash;
        registerUser.save().then(() => {
            res.json({"message" : "User created successfully" , "success": true});
        }).catch(er => res.json({message : er.message, success: false }));
        })
     })
 
    }
z})

module.exports = router;
