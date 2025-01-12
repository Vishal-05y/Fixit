import mongoose from "mongoose";

export async function dbConnect() {
    try {
        let connection = await mongoose.connect(String(process.env.MONGO_URI ));
        return connection;
        
    } catch (error) {
        throw new Error(error);
    }
}