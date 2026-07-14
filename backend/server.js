const express=require('express');
const app=express();
app.use(express.json());
require('dotenv').config();
const cors=require('cors');
const sequelize=require('./config/database');
app.use(cors());
const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
sequelize.authenticate().then(()=>{
    console.log('base donne connecte');
}).catch((err)=>{
    console.log('erreur '+err);
})   