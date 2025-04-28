import express from 'express';
import morgan from 'morgan';
import apiRouter from './routes/index.js';
import {connectDB} from './config/db.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

// connect to mongodb
connectDB()
 
app.use('/api',apiRouter);


export default app