import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';

import { HotelService } from '../../services/hotel/hotelService';
import { Controller } from '../controller';

const hotelService = new HotelService();
export class HotelController extends Controller {
  async getHotels(_: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await hotelService.getHotels();
      super.successResponse(response, 'successfully get hotels data', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async getHotelsById({ params }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await hotelService.getHotelById(params);
      super.successResponse(response, 'successfully get hotel data', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async createHotel({ body, params }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await hotelService.createHotel(body, params);
      super.successResponse(response, 'successfully create hotel data', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async updateHotel({ body, params }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await hotelService.updateHotel(body, params);
      super.successResponse(response, 'successfully update hotel data', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async deleteHotel({ params }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await hotelService.deleteHotel(params);
      super.successResponse(response, 'successfully delete hotel data');
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async addRoom({ body, params }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await hotelService.addRoom(body, params);
      super.successResponse(response, 'successfully add room to hotel', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }
}
