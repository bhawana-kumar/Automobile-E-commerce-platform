import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarfilterService {
  
  // private apiUrl = 'http://localhost:4000/cars';

  constructor(private http: HttpClient) { }

  findCarDetails(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:4000/vehicle/getAllVehicleData');
  }

  getCarById(carId: String): Observable<any> {
    
    const url = `http://localhost:4000/vehicle/getVehicle/${carId}`;
    return this.http.get<any>(url);
   }
  getCar(): Observable<any> {
    return this.http.get<any>("http://localhost:4000/vehicle/getAllVehicleData");
  }

  fetchDescription(carId: number): Observable<string> {
const url = `http://localhost:4000/vehicle/getVehicle/${carId}`;

    return this.http.get<string>(`${url}/${carId}`);
  }
  submitReport( comment: string,vehicleId: string,buyerId: string,buyerName: string,sellerName: string,sellerId: string, vehicleRegistrationNumber: string) {
    const reportData = { comment,vehicleId,buyerId,buyerName,sellerName,sellerId, vehicleRegistrationNumber};
    return this.http.post<any>('http://localhost:4000/report/createReport', reportData);
  }


  getProductPage() {
    return this.http.get(`http://localhost:4000/payment/payment`);
  }

  createOrder(data: any) {
    return this.http.post(`http://localhost:4000/payment/createOrder`, data);
  }
}