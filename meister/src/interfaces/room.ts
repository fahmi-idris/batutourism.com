export interface Reserved {
  from: string;
  to: string;
}

export interface IRoom {
  hotelId: string;
  name: string;
  guest: number;
  bedType: string;
  size: number;
  roomNumber: number;
  price: number;
  description: string;
  reserved: Reserved[];
}
