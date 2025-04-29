import {createShop} from '../../../controller/shopController.js';
import express from 'express';


const shopRouter = express.Router();

 shopRouter.post('/create-shop',createShop);

export default shopRouter;
