export interface Seller {
    _id: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    address: string;
    joinedDate: string;
    myVehicles: string[]; // Array of vehicle IDs
    status: 'active' | 'inactive';
    authorized: 'yes' | 'no';
    paymentInfo: any; // JSON object for payment information
    sellsHistory: string[]; // Array of vehicle IDs for sales history
  }
  