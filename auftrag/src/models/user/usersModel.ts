import * as mongoose from 'mongoose';

export interface UserType extends mongoose.Document {
  _id: string;
  name: string;
  phone: string;
  email: string;
  numberId: string;
  address?: string;
  password: string;
  active: boolean;
  authenticate: (plainPassword: string) => boolean;
  encryptPassword: (password: string) => string;
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    numberId: {
      type: String,
      required: true,
      index: true,
    },
    address: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      select: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'user',
  },
);

export default mongoose.model<UserType>('User', schema);
