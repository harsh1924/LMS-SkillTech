import { model, Schema } from 'mongoose';

const paymentSchema = new Schema(
    {
        payment_id: String
    },
    {
        timestamps: true,
    }
);

const Payment = model('Payment', paymentSchema);

export default Payment;
