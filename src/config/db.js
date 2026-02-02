import mongoose from "mongoose";

export const DatabaseSocailLogin = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected Successfully..")
    }catch(error){
        console.log("Database connection failded..", error);
    }
}