import express from 'express';
import PORT from './config.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();

app.listen (PORT , () => {
    console.log(`Server is listening at ${PORT}`);
});

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('connected to mongo dev')
}).catch ((err) => {
   console.log(err)
});
