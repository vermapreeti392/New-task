const express = require('express');
const app =express();
const PORT = process.env.PORT | 5000;
const getConnection = require('./connection/conn');
const addEmployee = require('./routes/AddEmployee');
const cors = require('cors');
getConnection();
app.use(cors());
app.use(express.json());
app.use(addEmployee);
// app.get('/', (req,res)=>{
//     res.send("hello");
// })
app.listen(PORT, ()=>console.log("server is running at 5000"));