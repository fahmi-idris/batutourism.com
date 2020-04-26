import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

import { HotelController } from '../../controllers/hotel/hotelController';
import { RoomController } from '../../controllers/room/roomController';

const hotelController: HotelController = new HotelController();
const roomController: RoomController = new RoomController();
export const router = (server: FastifyInstance<Server, IncomingMessage, ServerResponse>) => {
  server.get('/api/hotels', hotelController.getHotels);
  server.get('/api/search/hotel', hotelController.searchHotel);
  server.get('/api/hotel/:hotelId', hotelController.getHotelsById);
  server.post('/api/hotel/:userId', hotelController.createHotel);
  server.put('/api/hotel/:hotelId', hotelController.updateHotel);
  server.delete('/api/hotel/:hotelId', hotelController.deleteHotel);

  server.post('/api/hotel/:hotelId/room', roomController.addRoom);
  server.get('/api/room/:roomId', roomController.getRoom);
  server.post('/api/room/:roomId/reserved', roomController.reservedRoom);
  server.post('/api/room/available', roomController.availableRoom);
  server.post('/api/room/:roomId/available', roomController.availableRoomById);
};
