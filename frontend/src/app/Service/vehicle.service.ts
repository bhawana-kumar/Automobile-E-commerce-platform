import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
