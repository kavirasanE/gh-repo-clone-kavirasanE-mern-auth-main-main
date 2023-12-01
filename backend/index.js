import express from 'express';
import PORT from './config.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import cors from 'cors'


dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.listen (PORT , () => {
    console.log(`Server is listening at ${PORT}`);
});

app.use('/api',userRoutes)
app.use('/api',authRoutes)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message =err.message || "internal server error"
    return res.status(statusCode).json({
        sucess:false,
        message,
        statusCode,       
    });
});


mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('connected to mongo dev')
}).catch ((err) => {
   console.log(err)
});
