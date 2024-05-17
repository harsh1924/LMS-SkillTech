'use server'

import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const { connection } = await mongoose.connect(
            `mongodb+srv://harshrpanwar:p5hCkWQaGEPpDhi5@cluster0.s8zudya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` 
        );

        if (connection) {
            console.log(`Connected to MongoDB:`);
        }
    } catch (error) {
        console.log(error.message);
    }
};

export default connectToDB