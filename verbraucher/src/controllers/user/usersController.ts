import * as jwt from 'jsonwebtoken';

import User from '../../models/user/usersModel';
import { KEY } from '../../config/config';
import { encryptPassword, authenticate } from '../../utils/encryption';
import { ILogin, IRegister } from '../../interfaces/user';

export default {
  /**
   * Gets user using the email
   * @param {string} email - The title of the book.
   */
  user: async (email: string) => await User.findOne({ email }),

  /**
   * User login on the api
   * @param {string} password - User password
   * @param {string} email - User email
   */
  login: async ({ password, email }: ILogin) => {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isPasswordCorrect = authenticate(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error('Invalid email or password');
    }

    const token = `JWT ${jwt.sign({ id: user.email }, KEY)}`;

    return token;
  },

  /**
   * Register a user on the api
   * @param {string} name - User full name
   * @param {string} password - User password
   * @param {string} email - User email
   */
  addUser: async ({ name, password, email }: IRegister) => {
    const user = await User.findOne({ email });

    if (user) {
      throw new Error('This email is already in use');
    }

    const newUser = new User({
      name,
      email,
      password: encryptPassword(password),
    });

    await newUser.save();

    const token = `JWT ${jwt.sign({ id: email }, KEY)}`;

    return token;
  },
};
