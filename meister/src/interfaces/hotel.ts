export interface IHotel {
  name: string;
  address: string;
  type: 'Private' | 'Room';
  district: string;
  guest: number;
  category: 'Hotel' | 'Villa';
  isActive: boolean;
}
