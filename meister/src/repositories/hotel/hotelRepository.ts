import userModel from '../../models/hotel/hotelModels';

export class UserRepository {
  index() {
    return userModel.find();
  }

  show(id: string) {
    return userModel.findById(id);
  }
}
