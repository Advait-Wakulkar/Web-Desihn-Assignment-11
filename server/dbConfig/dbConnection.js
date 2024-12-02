import mongoose from "mongoose";

const dbConnection = async() => {
    try{
        const dbConnection = await mongoose.connect(process.env.MONGODB_URL)

        console.log("DB Connection success");
    }catch(error){
        console.log("DB ERROR: " + error)
    }
}

export default dbConnection;