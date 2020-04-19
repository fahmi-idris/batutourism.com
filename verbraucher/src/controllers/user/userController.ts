import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';

import { UserService } from '../../services/user/userService';
import { Controller } from '../controller';

const userService = new UserService();
export class UserController extends Controller {
  async login({ body }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await userService.login(body);
      super.successResponse(response, 'successfully login', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async register({ body }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await userService.register(body);
      super.successResponse(response, 'successfully register', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async getUser({ headers }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await userService.getUser(headers);
      super.successResponse(response, 'successfully get user data', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }
}
