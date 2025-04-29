import bcrypt from 'bcryptjs';
import shopModel from '../model/shopModel.js';
import { shopSignupValidtaion } from '../utils/joiValidation.js';



export const createShop = async (req,res) => {
    
    try {
        const {error,value} = shopSignupValidtaion.validate(req.body);

        if(error){
            return res.status(400).json({message:error.details[0].message});
        }

        const {email,password} = value;

        const shopExist = await shopModel.findOne({email:email});

        if(shopExist){
            return res.status(400).json({message:"Shop already exists"});
        }

        const hasedPassword = await bcrypt.hash(password,10);

        const newShop = new shopModel({
            email,
            password:hasedPassword,
        })

        await newShop.save();

        res.status(201).json({success:true,message:"Shop created successfully"});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}