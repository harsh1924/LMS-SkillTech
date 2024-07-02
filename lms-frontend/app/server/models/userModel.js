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
    userProgress: [{
        course: {
            id: String,
            lectures: [], 
        },
        currentLectureId: String,
        currentLectureURL: {
             type: String,
             default: 'https://www.youtube.com/watch?v=DNWORpZRJv4'
            },
        currentLectureTitle: {
            type: String,
            default: 'Intro to the course'
        },
        currentLectureDescription: {
            type:String,
            default: 'Welcome to SkillTech.'
        },
        progress: {
            type: Number,
            default: 0
        },
        isSurveyed: {
            type: Boolean,
            default: false
        }
    }],
}, {
    timestamps: true
})

const userModel = models.user || model('user', userSchema)

export default userModel