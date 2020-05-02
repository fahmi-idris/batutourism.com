import { RESTDataSource } from 'apollo-datasource-rest';

export class BookingProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SERVICE_BOOKING;
  }

  public async getBooking({ id }) {
    const res = await this.get(`/api/book/${id}`);
    return res.data;
  }

  public async booking(args) {
    const res = await this.post('/api/book', args);
    return res.data;
  }
}
