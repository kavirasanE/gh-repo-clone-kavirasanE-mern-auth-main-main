import express from 'express';
import PORT from './config.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userdata from './routes/user.routes.js'
import signup from './routes/auth.routes.js'

dotenv.config();

const app = express();
app.use(express.json());

app.listen (PORT , () => {
    console.log(`Server is listening at ${PORT}`);
});

app.use('/api',userdata)
app.use('/api',signup)
mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('connected to mongo dev')
}).catch ((err) => {
   console.log(err)
});
