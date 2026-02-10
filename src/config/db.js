import mongoose from "mongoose";

export const connectDB = async (mongoUrl) => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("✅ MongoDB conectado");
  } catch (error) {
    console.error("❌ Error conectando MongoDB:", error.message);
    process.exit(1);
  }
};
