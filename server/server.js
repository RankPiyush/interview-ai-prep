import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const PORT = 3000;
dotenv.config();


connectDB();


app.listen( process.env.PORT||PORT ,()=>{
    console.log(`app is listing port ${PORT}`);
    
})

