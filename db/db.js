import mongoose from "mongoose";

let dbInstance = null;

async function connectDB() {
  if (dbInstance) return dbInstance;

  try {
    dbInstance = await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connection successful");
    return dbInstance;
  } catch (error) {
    console.error("DB Connection NOT successful", error);
    throw error;
  }
}

const connect = async () => {
  try {
    mongoose.connect(MONGO_DB_LOCAL);
    console.log("DB Connection successful");
    return { success: true, message: "DB Connected successfully" };
  } catch (error) {
    return { success: false, message: "Failed to connect to DB" };
  }
};

export default connectDB;
