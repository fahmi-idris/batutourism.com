import { UserController } from '../../controllers/user/usersController';
import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const userController: UserController = new UserController();
export const router = (server: FastifyInstance<Server, IncomingMessage, ServerResponse>) => {
  server.post('/api/login', userController.login);
  server.post('/api/register', userController.register);
  server.get('/api/user', userController.getUser);
};
