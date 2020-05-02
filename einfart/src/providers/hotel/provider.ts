import { RESTDataSource } from 'apollo-datasource-rest';

export class HotelProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SERVICE_MASTER;
  }

  public async getHotels() {
    const res = await this.get(`/api/hotels`);
    return res.data;
  }

  public async getHotel({ id }) {
    const res = await this.get(`/api/hotel/${id}`);
    return res.data;
  }

  public async searchHotel({ name }) {
    const res = await this.get(`/api/search/hotel?name=${name}`);
    return res.data;
  }

  public async createHotel(args) {
    const res = await this.post(`/api/hotel/${args.userId}`, args);
    return res.data;
  }

  public async updateHotel(args) {
    const res = await this.put(`/api/hotel/${args.hotelId}`, args);
    return res.data;
  }

  public async deleteHotel({ hotelId }) {
    const res = await this.delete(`/api/hotel/${hotelId}`);
    return res;
  }
}
