import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect();
    console.log("Connection is successfull"); 

  } catch (error) {
    console.log("Connection is faild  " + error);
  }

};

export default connectToDatabase;
