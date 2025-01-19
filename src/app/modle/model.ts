import mongoose ,{Schema,Document} from "mongoose";

export interface Massage extends Document{
    content:"string";
    createdAt:Date
}

const MassageSchema :Schema<Massage>=new Schema({
    content:{
        type: String,
        required:true
    }
    ,
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

export interface User extends Document{
   username:string;
   email:string;
   password:string;
   varifyCode:string;
   verifyCodeExpiry:Date;
   massages:Massage[];
}

const UserSchema :Schema<User>=new Schema({
    username:{
        type: String,
        required:true
    }
    ,
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/.+\.*/,"email is required"]
        
    }
    ,
    password:{
        type:String,
        required:[true,"password is required "]
        
    },
    varifyCode:{
        type:String,
        required:[true," varifyCode is required "]
        
    }
    ,
    verifyCodeExpiry:{
        type:Date,
        required:true,
        
    }
    ,
    massages: [ MassageSchema ]
    
})

export const UserModel=mongoose.model<User>("User", UserSchema )