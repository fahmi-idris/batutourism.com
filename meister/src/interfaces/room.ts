export interface Reserved {
  from: string;
  to: string;
  guest: number;
}

export interface IRoom {
  hotelId: string;
  name: string;
  guest: number;
  bedType: 'DOUBLE' | 'SINGLE';
  size: number;
  roomNumber: number;
  price: number;
  description: string;
  reserved: Reserved[];
}
