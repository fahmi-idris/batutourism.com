export interface IHotel {
  name: string;
  address: string;
  type: 'PRIVATE' | 'ROOM';
  district: string;
  guest: number;
  category: 'HOTEL' | 'VILLA';
  isActive: boolean;
}
