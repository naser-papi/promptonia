import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  await mongoose.set("strictQuery", true);
  if (isConnected) {
    console.info("\x1b[40m","MongoDB is already connected","\x1b[0m");
    return;
  }

  try {
    await mongoose.connect(process.env.DATA_BASE_URI, {
      dbName: process.env.DATABASE_NAME,
    } as any);
    isConnected = true;
    console.info("\x1b[40m","Database connected","\x1b[0m");
  } catch (error) {
    console.error("\x1b[41m","an error occurs  while connect to db" , error,"\x1b[0m");
  }
};
