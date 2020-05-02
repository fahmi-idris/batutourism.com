import { DefaultParams } from 'fastify';
import fetch from 'node-fetch';

import Book from '../../models/booking/bookingsModel';
import { IBooking } from '../../interfaces/booking';
import { getPrice } from '../../utils/formatter';
import { checkRoom, reserveRoom } from '../../utils/api';

export class BookingService {
  async getBook({ bookingId }: DefaultParams): Promise<object> {
    const data = Book.findOne({ _id: bookingId });
    return data;
  }

  async book(data: Partial<IBooking>): Promise<object> {
    const { roomId, from, to, guest } = data;
    const check = await checkRoom(roomId, from, to, guest);
    if (!check) {
      throw new Error('date not available');
    }
    const room = await fetch(`${process.env.MASTER_SERVICE}/api/room/${roomId}`).then((res) => res.json());
    const price = getPrice(room, from, to);
    const res = new Book({
      ...data,
      total: price,
    });
    await res.save();
    await reserveRoom(roomId, from, to);
    return res;
  }
}
