import mongoose from "mongoose";
import "dotenv/config";

async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {});
    console.log("Connect to mongoDB");
  } catch (error) {
    console.error("error", error);
    process.exit(1);
  }
}

export default connectDB;
