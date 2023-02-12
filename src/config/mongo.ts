import "dotenv/config";
import { connect } from "mongoose";
import mongoose from "mongoose";
mongoose.set("strictQuery", true);

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;
  await connect(DB_URI);
}

export default dbConnect;
