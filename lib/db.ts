import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting to MongoDB...");
    return;
  }
  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "next14restapi",
      bufferCommands: true,
    });
    console.log("Connected to MongoDB");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Failed to connect to MongoDB", error);
    throw new Error("Failed to connect to MongoDB", error);
  }
};

export default connect;
