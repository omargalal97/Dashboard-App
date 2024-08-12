import mongoose from "mongoose";


export const connectToDB = async () => {
const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect('mongodb+srv://omar_1907:omar_1907@cluster0.xrebt.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 100000, // Increase the timeout duration
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("connection success")
  } catch (error) {
    console.log("connection failed", error)
    // throw new Error(error);
  }
};