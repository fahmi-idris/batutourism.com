import { RESTDataSource } from 'apollo-datasource-rest';

export class UserProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SERVICE_USER;
  }

  public async getUser({ id }) {
    const res = await this.get(`/api/user/${id}`);
    return res.data;
  }

  public async createUser(args) {
    const res = await this.post(`/api/register`, args);
    return res.data;
  }
}
