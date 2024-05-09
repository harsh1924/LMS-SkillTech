import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const { connection } = await mongoose.connect(
            process.env.MONGO_URL || `mongodb://127.0.0.1:27017/Skill-Tech-LMS`
        );

        if (connection) {
            console.log(`Connected to MongoDB:`);
        }
    } catch (error) {
        console.log(error);
    }
};

export default connectToDB