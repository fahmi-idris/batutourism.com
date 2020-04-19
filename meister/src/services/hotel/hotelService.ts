import { DefaultParams } from 'fastify';
import fetch from 'node-fetch';

import Hotel from '../../models/hotel/hotelModels';
import Room from '../../models/room/roomModels';
import { IHotel } from '../../interfaces/hotel';

export class HotelService {
  async getHotels(): Promise<object> {
    const response = await Hotel.find();
    return response;
  }

  async getHotelById({ hotelId }: DefaultParams): Promise<object> {
    let rooms;
    const hotel = await Hotel.findById({ _id: hotelId });
    if (hotel.category === 'Hotel') {
      rooms = await Room.find({ hotelId: hotel._id });
    }
    if (hotel.category === 'Villa') {
      rooms = await Room.findOne({ hotelId: hotel._id });
    }
    return {
      hotel,
      rooms,
    };
  }

  async createHotel(data: Partial<IHotel>, { userId }: DefaultParams): Promise<object> {
    const user = await fetch(`${process.env.USER_SERVICE}/api/user/${userId}`).then((res) => res.json());
    if (!user.success) {
      throw new Error('userId not found');
    }
    const res = new Hotel({
      userId,
      ...data,
    });
    await res.save();
    return {
      userId,
      _id: res._id,
      ...data,
    };
  }

  async updateHotel(data: Partial<IHotel>, { hotelId }: DefaultParams): Promise<object> {
    const res = await Hotel.findByIdAndUpdate(
      hotelId,
      {
        $set: data,
      },
      {
        new: true,
      },
    );
    return res;
  }

  async deleteHotel({ hotelId }: DefaultParams): Promise<object> {
    const res = await Hotel.findById(hotelId);
    await res.remove();
    return res;
  }

  async addRoom(data: Partial<IHotel>, { hotelId }: DefaultParams): Promise<object> {
    const response = await Hotel.findById({ _id: hotelId });
    const checkRoom = await Room.findOne({ hotelId });
    if (response.category === 'Villa' && checkRoom) {
      throw new Error('this is villa, cant add room more than 1');
    }

    const room = new Room({
      hotelId,
      ...data,
    });
    await room.save();
    return room;
  }
}
