import express from "express";
import bcrypt from "bcrypt";
import userRegistrationModel from "../models/UserRegistration.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    
  try {
    const  { name, email, password } = req.body;
    const user = await userRegistrationModel.findOne({ email });

    if (user) {
      return res
        .status(401)
        .json({ success: false, message: "User is already exits " });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newuser = new userRegistrationModel({
      name,
      email,
      password: hashPassword,
    });

    await newuser.save();

    return res
      .status(200)
      .json({ success: true, message: " User added successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "error adding user " + error });
  }
});

export default router;
