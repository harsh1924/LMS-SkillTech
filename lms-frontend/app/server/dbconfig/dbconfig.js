'use server'

import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const { connection } = await mongoose.connect(
            `${process.env.MONGODB_URI}` 
        );

        if (connection) {
            console.log(`Connected to MongoDB:`);
        }
    } catch (error) {
        console.log(error.message);
    }
};

export default connectToDB