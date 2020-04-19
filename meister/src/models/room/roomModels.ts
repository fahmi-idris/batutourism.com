import * as mongoose from 'mongoose';

export interface RoomType extends mongoose.Document {
  _id: string;
  hotelId: string;
  name: string;
  guest: number;
  bedType: string;
  size: number;
  roomNumber: number;
  price: number;
  description: string;
}

const schema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel',
      index: true,
    },
    name: {
      type: String,
      required: true,
      index: true,
    },
    guest: {
      type: Number,
      required: false,
    },
    bedType: {
      type: String,
      required: false,
    },
    size: {
      type: Number,
      required: false,
    },
    roomNumber: {
      type: Number,
      required: false,
    },
    price: {
      type: Number,
      required: true,
      index: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'room',
  },
);

export default mongoose.model<RoomType>('Room', schema);
