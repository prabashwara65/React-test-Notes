import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://prabashwara65:Rr36JRUgFVNylsuy@cluster0.qtbww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("Connection is successfull"); 

  } catch (error) {
    console.log("Connection is faild  " + error);
  }

};

export default connectToDatabase;
