import { UserController } from '../../controllers/booking/bookingController';
import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const userController: UserController = new UserController();
export const router = (server: FastifyInstance<Server, IncomingMessage, ServerResponse>) => {
  server.post('/api/book', userController.booking);
  server.get('/api/book/:bookingId', userController.getBooking);
};
