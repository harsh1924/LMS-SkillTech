import { model, models, Schema } from 'mongoose';

const paymentSchema = new Schema({
    id: String,
    userId: String,
    courseId: String,
    stripeCustomerId: String
}, {
    timestamps: true
});

const purchaseModel = models.payments || model('payments', paymentSchema);

export default purchaseModel;