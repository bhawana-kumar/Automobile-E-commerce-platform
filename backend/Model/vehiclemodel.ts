
export interface Vehicle {
  _id: string;
  identification_number: string;
  registration_number: string;
  location: string;
  brandName: string;
  carName: string;
  manufYear: number;
  ownerShip: 'First' | 'Second' | 'Third';
  carImg?: string[]; // Array of image URLs
  color?: string;
  seats: number;
  price: number;
  engine?: string;
  torque?: string;
  driveType?: 'FWD' | 'RWD' | 'AWD' | '4WD';
  fuelType?: string;
  power?: string;
  mileage?: string;
  description?: string;
  bodyType: string;
  sellerId: string;
  status: 'available' | 'unavailable';
}
