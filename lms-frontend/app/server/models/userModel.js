import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        trim: true,
        minLength: [3, 'Minimum Length should be atleast 3 characters'],
        maxLength: [50, 'Maximum Length should be atleast 50 characters']
    },
    lastname: String,
    phoneNumber: Number,
    Address: String,
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
        enum: ['USER', 'ADMIN', 'TRAINER'],
        default: 'USER'
    },
    subscription: {
        id: String,
        status: String,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    userProgress: [{
        course: {
            id: String,
            lectures: []
        },
        progress: {
            type: Number,
            default: 0
        }
    }]
}, {
    timestamps: true
})

const userModel = models.user || model('user', userSchema)

export default userModel