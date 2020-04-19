import { HotelController } from '../../controllers/hotel/hotelController';
import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const hotelController: HotelController = new HotelController();
export const router = (server: FastifyInstance<Server, IncomingMessage, ServerResponse>) => {
  server.get('/api/hotels', hotelController.getHotels);
  server.get('/api/hotel/:hotelId', hotelController.getHotelsById);
  server.post('/api/hotel/:userId', hotelController.createHotel);
  server.put('/api/hotel/:hotelId', hotelController.updateHotel);
  server.delete('/api/hotel/:hotelId', hotelController.deleteHotel);
  server.post('/api/hotel/:hotelId/room', hotelController.addRoom);
};
