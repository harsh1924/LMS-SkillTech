import { model, models, Schema } from 'mongoose';
import { defaultConfig } from 'next/dist/server/config-shared';

const courseSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        maxlength: [50, 'Title cannot be more than 50 characters'],
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
            lecture: {
                public_id: {
                    type: String,
                    required: true,
                },
                secure_url: {
                    type: String,
                    required: true,
                },
            },
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
    isPublished: {
        type: Boolean,
        default: false
    },
});

const courseModel = models.course || model('course', courseSchema);

export default courseModel;