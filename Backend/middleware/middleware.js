import jwt from "jsonwebtoken";


const middleware = async (req , res , next) => {
    try{
        const token = req.headers.authorization.split( ' ')[1]

        if(!token){
            return res.status(401).json({success: false , message: "unAuthorization"})
        }

        const decoded = jwt.verify(token, JWTKEY);

        if(!decoded){
            return res.status(401).json({success: false , message: "wrong token"})
        }

        const User = await User.findById({id: decoded.id})

        if(!User){

            return res.status(404).json({success: false , message: "User Didn't Find"})
        }

        const newUser = {name: User.name , id: User._id}

        req.User = newUser

        //continue and execute add new note function 
        next();

    }catch(error){

        return res.status(500).json({success: false , message: "Please Log in"})

    }
}

export default middleware;