import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';

import { HotelService } from '../../services/hotel/hotelService';
import { Controller } from '../controller';

const hotelService = new HotelService();
export class HotelController extends Controller {
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
}
