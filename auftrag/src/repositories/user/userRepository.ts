import userModel from '../../models/user/usersModel';

export class UserRepository {
  index() {
    return userModel.find();
  }

  show(id: string) {
    return userModel.findById(id);
  }
}
