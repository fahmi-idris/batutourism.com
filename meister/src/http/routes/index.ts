import { HotelController } from '../../controllers/hotel/hotelController';
import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const hotelController: HotelController = new HotelController();
export const router = (server: FastifyInstance<Server, IncomingMessage, ServerResponse>) => {
  server.post('/api/hotel/:userId', hotelController.createHotel);
  server.put('/api/hotel/:hotelId', hotelController.updateHotel);
  server.delete('/api/hotel/:hotelId', hotelController.deleteHotel);
};
