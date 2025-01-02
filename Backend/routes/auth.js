import express from "express";
import bcrypt from "bcrypt";
import userRegistrationModel from "../models/UserRegistration.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
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

router.get("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await user.findOne({ email });

    if (!user) {
      return res.json(401).json({ success: false, message: "User not found" });
    }

    const checkpassword = await bcrypt.compare(password, user.password);

    if (!checkpassword) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong credentials" });
    }

    const token = jwt.sign({ id: user._id }, "JWTKEY", { expiresIn: "5h" });

    return res.status(200).json({
      success: true,
      token,
      user: { name: user.name },
      message: "Login Successfull",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: " Error in server" });
  }
});

export default router;
