import { DefaultParams } from 'fastify';

import Hotel from '../../models/hotel/hotelModels';
import Room from '../../models/room/roomModels';
import { IRoom, Reserved } from '../../interfaces/room';

export class RoomService {
  async addRoom(data: Partial<IRoom>, { hotelId }: DefaultParams): Promise<object> {
    const hotel = await Hotel.findById({ _id: hotelId });
    const checkRoom = await Room.findOne({ hotelId });
    if (hotel.category === 'Villa' && checkRoom) {
      throw new Error('this is villa, cant add room more than 1');
    }

    const room = new Room({
      hotelId,
      ...data,
    });
    await room.save();
    return room;
  }

  async getRoom({ roomId }: DefaultParams): Promise<object> {
    const data = await Room.findById({ _id: roomId });
    return data;
  }

  async reservedRoom(data: Reserved, { roomId }: DefaultParams): Promise<object> {
    const res = await Room.findByIdAndUpdate(
      roomId,
      {
        $push: {
          reserved: data,
        },
      },
      {
        new: true,
      },
    );
    return res;
  }

  async availableRoom(data: Reserved): Promise<object> {
    const { from, to } = data;
    const res = await Room.find({
      reserved: {
        $not: {
          $elemMatch: { from: { $lt: to.substring(0, 10) }, to: { $gt: from.substring(0, 10) } },
        },
      },
    });
    return res;
  }

  async availableRoomById(data: Reserved, { roomId }: DefaultParams): Promise<object> {
    const { from, to } = data;
    const res = await Room.findOne({
      _id: roomId,
      reserved: {
        $not: {
          $elemMatch: { from: { $lt: to.substring(0, 10) }, to: { $gt: from.substring(0, 10) } },
        },
      },
    });
    return res;
  }
}
