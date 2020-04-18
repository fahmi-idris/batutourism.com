export interface IRegister {
  name: string;
  password: string;
  email: string;
}

export interface IGetUser {
  search: string;
  after: number;
  first: number;
}

export interface ILogin {
  email: string;
  password: string;
}
