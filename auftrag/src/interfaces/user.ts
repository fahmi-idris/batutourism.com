export interface IRegister {
  name: string;
  phone: string;
  email: string;
  numberId: string;
  address?: string;
  password: string;
}

export interface IUser {
  id: string;
}

export interface ILogin {
  email: string;
  password: string;
}
