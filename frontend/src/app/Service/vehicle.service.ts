import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../../../../backend/Model/vehiclemodel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http:HttpClient) { }

  saveProductDetails(product: any){
    console.log("Product service");    
    return this.http.post("http://localhost:4000/addProduct", product)
     // path getting from nodejs
    }

    getMyVehicles(sellerId: string): Observable<Vehicle[]> {
      return this.http.get<Vehicle[]>(`http://localhost:4000/getVehiclesForSeller/${sellerId}`);
    }

    editProduct(vehicleId: string, updatedData: any): Observable<Vehicle> {
    return this.http.put<Vehicle>(`http://localhost:4000/editProduct/${vehicleId}`, updatedData);
  }

  deleteProduct(vehicleId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:4000/deleteProduct/${vehicleId}`);
  }

}
