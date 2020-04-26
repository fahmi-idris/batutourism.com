import { DefaultParams } from 'fastify';

import User from '../../models/user/usersModel';
import { ILogin, IRegister } from '../../interfaces/user';
import { encryptPassword, authenticate, jwtSign, jwtVerify } from '../../utils/encryption';

export class UserService {
  async login(data: Partial<ILogin>): Promise<object> {
    const { email, password } = data;
    const response = await User.findOne({ email }).select('+password');
    if (!response) {
      throw new Error('Invalid email or password');
    }

    const isPasswordCorrect = authenticate(password, response.password);
    if (!isPasswordCorrect) {
      throw new Error('Invalid email or password');
    }
    const token = jwtSign(response.id);
    return {
      token,
    };
  }

  async register(data: Partial<IRegister>): Promise<object> {
    const { email, password } = data;
    const response = await User.findOne({ email });
    if (response) {
      throw new Error('This email is already in use');
    }

    const res = new User({
      ...data,
      email,
      password: encryptPassword(password),
    });
    await res.save();
    const token = jwtSign(res.id);
    return {
      token,
    };
  }

  async getUser({ id }: DefaultParams): Promise<object> {
    const user = await User.findById({ _id: id });
    return {
      user,
    };
  }
}
