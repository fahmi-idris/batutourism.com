import * as mongoose from 'mongoose';

export interface HotelType extends mongoose.Document {
  _id: string;
  userId: string;
  name: string;
  address: string;
  type: 'Private' | 'Room';
  district: string;
  guest: number;
  category: 'Hotel' | 'Villa';
  isActive: boolean;
}

const schema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      index: true,
    },
    address: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      index: true,
    },
    district: {
      type: String,
      required: true,
      index: true,
    },
    guest: {
      type: Number,
      required: false,
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'hotel',
  },
);

export default mongoose.model<HotelType>('Hotel', schema);
