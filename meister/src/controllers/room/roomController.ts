import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';

import { HotelService } from '../../services/hotel/hotelService';
import { RoomService } from '../../services/room/roomService';
import { Controller } from '../controller';

const roomService = new RoomService();
export class RoomController extends Controller {
  async addRoom({ body, params }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await roomService.addRoom(body, params);
      super.successResponse(response, 'successfully add room to hotel', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async getRoom({ params }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await roomService.getRoom(params);
      super.successResponse(response, 'successfully get room detail', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async reservedRoom({ body, params }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await roomService.reservedRoom(body, params);
      super.successResponse(response, 'successfully reserved room from hotel', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async availableRoom({ body }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await roomService.availableRoom(body);
      super.successResponse(response, 'successfully check available room from hotel', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async availableRoomById({ body, params }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await roomService.availableRoomById(body, params);
      super.successResponse(response, 'successfully check available room from hotel', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }
}
