import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log(" MongoDB Connected successfully!");
    });

    connection.on("Error", (err) => {
      console.log("MongoDB Could not connected!" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Opps!.. Something went wrong!");
  }
}
