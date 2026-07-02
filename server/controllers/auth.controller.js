import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";



const registerUser = async (req,res)=>{

    try {
        const {name,email,password} = req.body; 

    if(!name || !email || !password)
    {
        return res.status(400).json({
            success:false,
            message:"All field are required"
        });
    }

    const existingUser  = await User.findOne({email});

    if(existingUser)
    {
        return res.status(400).json({
            success:false,
            message:"User already exist"
        });
    }
        const hashedPassword = await bcrypt.hash(password, 10);
        
    const user = await User.create({
        name,
        email,
        password:hashedPassword
    })

    res.status(201).json({
        success:true,
        message:"User register successfull...",
        user
    })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }

    
}

const loginUser =async (req,res)=>{

    try {

         const {email,password} = req.body; 

         if(!email || ! password)
         {
            return  res.status(400).json({
                success:false,
                message:"All find are required"
            })
         }

        const user =  await User.findOne({email});
        
        if(!user)
        {
            return  res.status(400).json({
                success:false,
                message:"Invalid email or password",
            })
        }
        const ispassword = await bcrypt.compare(password,user.password);
        

        if(!ispassword)
        {
           return res.status(400).json({
                success:false,
                message:"Invalid email or password"
            })
        }

        res.status(200).json({
            success:true,
            message:"Login successfull...",
            user
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
        
    }
    
}

export {registerUser , loginUser}