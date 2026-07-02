import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connect successfull....");
        
        
    } catch (error) {
        console.log(`Database connection ERROR${error}`);
        process.exit(1);
    }
} 

export default connectDB