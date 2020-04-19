import { DefaultParams } from 'fastify';

import Hotel from '../../models/hotel/hotelModels';
import { IHotel } from '../../interfaces/hotel';

export class HotelService {
  async createHotel(data: Partial<IHotel>, params: DefaultParams): Promise<object> {
    const { userId } = params;
    const res = new Hotel({
      userId,
      ...data,
    });
    res.save();
    return {
      userId,
      _id: res._id,
      ...data,
    };
  }

  async updateHotel(data: Partial<IHotel>, params: DefaultParams): Promise<object> {
    const { hotelId } = params;
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

  async deleteHotel(params: DefaultParams): Promise<object> {
    const { hotelId } = params;
    const res = await Hotel.findById(hotelId);
    await res.remove();
    return res;
  }
}
