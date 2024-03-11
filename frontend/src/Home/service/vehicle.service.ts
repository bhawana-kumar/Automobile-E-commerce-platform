import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../../../../backend/model/vehiclemodelInt';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http:HttpClient) { }

  
  getVehicleById(vehicleId :string) {
    // console.log(vehicleId);
    return this.http.get<Vehicle[]>(`http://localhost:4000/vehicle/getVehicle/${vehicleId}`)
  }
 

  saveProductDetails(product: any){
    console.log("Product service");    
    return this.http.post("http://localhost:4000/vehicle/createVehicle", product)
     // path getting from nodejs
    }

    getMyVehicles(sellerId: string): Observable<Vehicle[]> {
      return this.http.get<Vehicle[]>(`http://localhost:4000/vehicle/getVehiclesForSeller/${sellerId}`);
    }

    editProduct(vehicleId: string, updatedData: any): Observable<Vehicle> {
    return this.http.put<Vehicle>(`http://localhost:4000/vehicle/updateVehicle/${vehicleId}`, updatedData);
  }

  deleteProduct(vehicleId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:4000/vehicle/deleteProduct/${vehicleId}`);
  }

}

