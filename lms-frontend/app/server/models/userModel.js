import { match } from "assert";
import { verify } from "crypto";
import { Schema, model, models } from "mongoose";
import { type } from "os";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        trim: true,
        minLength: [3, 'Minimum Length should be atleast 3 characters'],
        maxLength: [50, 'Maximum Length should be atleast 50 characters']
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please provide email"],
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        select: false,
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const userModel = models.user || model('user', userSchema)

export default userModel