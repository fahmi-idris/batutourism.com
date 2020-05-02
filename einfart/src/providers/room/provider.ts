import { RESTDataSource } from 'apollo-datasource-rest';

export class RoomProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SERVICE_MASTER;
  }

  public async getRoom({ id }) {
    const res = await this.get(`/api/room/${id}`);
    return res.data;
  }

  public async createRoom(args) {
    const res = await this.post(`/api/hotel/${args.hotelId}/room`, args);
    return res.data;
  }

  public async availableRoom(args) {
    const res = await this.post(`/api/room/available`, args);
    return res.data;
  }
}
