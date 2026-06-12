import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB Connected");
    });

    await mongoose.connect(process.env.MONGODB_URL, {
      family: 4,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
