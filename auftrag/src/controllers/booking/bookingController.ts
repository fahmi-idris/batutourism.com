import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';

import { BookingService } from '../../services/booking/bookingService';
import { Controller } from '../controller';

const bookingService = new BookingService();
export class UserController extends Controller {
  async booking({ body }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await bookingService.book(body);
      super.successResponse(response, 'successfully book', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }

  async getBooking({ params }: FastifyRequest<any>, response: FastifyReply<ServerResponse>) {
    try {
      const data = await bookingService.getBook(params);
      super.successResponse(response, 'successfully get booking data', data);
    } catch (exception) {
      super.internalServerErrorresponse(response, [exception.message], 500);
    }
  }
}
