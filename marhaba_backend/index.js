const mongoose=require('mongoose')
const express=require('express')
const cors = require('cors');
const app=express()
const env=require('dotenv').config()
const PORT=process.env.PORT||4111
const authroute=require('./routes/AuthlrRoute')
const db=require('./Config/db')
const usermodel=require('./models/UserModel')
const bodyparser=require('body-parser')
// const axios=require('axios')


app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use('/api/auth/',authroute)




app.listen(PORT,console.log(`Server connect in port ${PORT}successfly `))








