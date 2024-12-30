import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/food-del');
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
