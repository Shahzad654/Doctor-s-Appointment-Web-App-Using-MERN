import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { userRouter } from './routers/users.js';
import { appointRouter } from './routers/appointment.js';
import { adminRouter } from './routers/admin.js';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/EcommerceWebApp')
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });

app.use('/Auth', userRouter);
app.use('/Admin', adminRouter)
app.use('/Appoint', appointRouter)

app.listen(5000, () => {
    console.log('Server Started Successfully!');
});
