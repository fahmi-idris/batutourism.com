import * as mongoose from 'mongoose';
import { generateInvoice } from '../../utils/formatter';

export interface BookingType extends mongoose.Document {
  _id: string;
  roomId: string;
  name: string;
  phone: string;
  email: string;
  request: string;
  from: Date;
  to: Date;
  guest: string;
  authenticate: (plainPassword: string) => boolean;
  encryptPassword: (password: string) => string;
}

const schema = new mongoose.Schema(
  {
    invoice: {
      type: String,
      required: true,
      default: generateInvoice('BOOKING'),
    },
    roomId: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    request: {
      type: String,
      required: false,
    },
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
    guest: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'booking',
  },
);

export default mongoose.model<BookingType>('Booking', schema);
