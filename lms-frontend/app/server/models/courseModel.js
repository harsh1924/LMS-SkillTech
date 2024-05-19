import { model, models, Schema } from 'mongoose';

const courseSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [5, 'Description must be atleast 5 characters long'],
    },
    category: {
        type: String,
        id: String,
        required: [true, 'Category is required'],
    },
    lectures: [
        {
            title: String,
            description: String,
            videoUrl: String,
        },
    ],
    imageUrl: String,
    price: {
        type: Number,
        default: 0
    },
    numberOfLectures: {
        type: Number,
        default: 0,
    },
    createdBy: {
        type: String,
        required: [true, 'Course instructor name is required'],
    },
    attachments: [
        {
            id: {
                type: String,
                name: String,
                url: String
            },
        }
    ],
    isPublished: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

const courseModel = models.course || model('course', courseSchema);

export default courseModel;