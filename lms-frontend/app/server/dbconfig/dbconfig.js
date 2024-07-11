'use server'

import mongoose from "mongoose";

const connectToDB = async () => {
    try {

        const DB_URL = process.env.MONGODB_URI

        const { connection } = await mongoose.connect(DB_URL);

        if (connection) {
            console.log(`Connected to MongoDB:`);
        }
    } catch (error) {
        console.log(error.message);
    }
};

export default connectToDB