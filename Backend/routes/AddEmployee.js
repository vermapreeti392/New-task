const express = require('express');
const router = express.Router();
const Employee = require('../model/Employee');

// api for adding employee
router.post('/addEmployee', async(req,res)=>{   
    try{
        const {name, email, city, zipcode} = req.body;
        const data = await Employee.create({
            name:name,
            email:email,
            city:city,
            zipcode:zipcode 
        })        
        res.status(200).json({
            status: "success",
            message: "employee added successfully",
            data
        })
    }
    catch(e){
        res.status(422).json({
            status: "failed",
            error: e.error            
        })
    }
})

// get employee
router.get('/',async(req,res)=>{
    try{
        const data = await Employee.find({});
        return res.status(200).send(data)
    }
    catch(e){
        res.status(422).json({
            status: "failed",
            error: e.error            
        })
    }
})
module.exports = router;