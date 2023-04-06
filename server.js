const express=require('express');
const morgan=require('morgan')
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const colors=require('colors');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const errorHandler=require('./middlewares/errorMiddleware')
// routes path
const authRoutes=require('./routes/authRoutes')
//rest object
const app=express()
//dotenv
dotenv.config()
//mongo connecion
connectDB();
//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
// app.use(errorHandler)

const PORT=process.env.PORT||8000
// API routes
app.use('/api/v1/auth',authRoutes);
// app.use('/api/v1/openai',require('./routes/openaiRoutes'));
// listen server
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} on ${PORT}`)
   
})