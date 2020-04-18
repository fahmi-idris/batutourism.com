import * as mongoose from 'mongoose';

export interface UserType extends mongoose.Document {
  _id: string;
  name: string;
  password: string;
  email: string;
  active: boolean;
  authenticate: (plainPassword: string) => boolean;
  encryptPassword: (password: string) => string;
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      select: false,
    },
    email: {
      type: String,
      required: false,
      index: true,
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
