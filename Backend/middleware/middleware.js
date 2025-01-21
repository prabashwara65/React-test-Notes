import jwt from "jsonwebtoken";
import User from "../models/UserRegistration";
import User from "../models/UserRegistration";

const middleware = async (req , res , next) => {
    try{
        const token = req.headers.authorization.split( ' ')[1]

        if(!token){
            return res.status(401).json({success: falst , message: "unAuthorization"})
        }

        const decoded = jwt.verify(token, JWTKEY);

        if(!decoded){
            return res.status(401).json({success: falst , message: "wrong token"})
        }

        const User = await User.findById({id: decoded.id})

        if(!User){

            return res.status(404).json({success: falst , message: "User Din't Find"})
        }

        const newUser = {name: User.name}

        req.User = newUser

        next();

    }catch(error){

    }
}

export default middleware;