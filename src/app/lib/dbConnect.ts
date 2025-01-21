import mongoose from "mongoose";
import { number, promise } from "zod";

type ConnectionObject={
  isConnected?:number
}

const connection:ConnectionObject={}

async function dbConnect() :Promise<void> {
    // if database pahle se hi connected ho tab ke liye--
    if(connection.isConnected){
        console.log("database already connected !!");
        return
    }

    //nahi to connect karte hai
    try {
       const db= await mongoose.connect(process.env.MONGO_URI ||'',{})
       console.log(db);

       connection.isConnected=db.connections[0].readyState
       console.log("Mongodb connected successfully!")
        
    } catch (error) {
        console.log("mongodb connection failed",error)
        process.exit(1)
    }
}

export default dbConnect;