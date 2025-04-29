import mongoose from 'mongoose';


 const shopSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
 });

 const shopModel = mongoose.model('Shop',shopSchema);

 export default shopModel;