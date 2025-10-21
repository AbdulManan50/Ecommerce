import mongoose  from "mongoose";

const MONGODB_URI  = process.env.MONGO_URI  as string;


if(!MONGODB_URI){
    throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}
let  isConnected = false;
export const connectToDatabase = async (): Promise<void> =>{
   if(isConnected){
     console.log("Already connected to database");
     return
   }
   try {

    const db =  await mongoose.connect(MONGODB_URI);
     isConnected = !!db.connections[0].readyState;
     console.log("Connected to database");
    
   } catch (error) {
    console.log("Error connecting to database", error);
    throw new Error("Error connecting to database");
   }
}
