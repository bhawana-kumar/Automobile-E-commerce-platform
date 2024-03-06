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
    
    const url = `http://localhost:4000/vehicle/getAllVehicleData/${carId}`;
    return this.http.get<any>(url);
   }
  getCar(): Observable<any> {
    return this.http.get<any>("http://localhost:4000/vehicle/getAllVehicleData");
  }

  fetchDescription(carId: number): Observable<string> {
const url = `http://localhost:4000/vehicle/getAllVehicleData/${carId}`;

    return this.http.get<string>(`${url}/${carId}`);
  }


  // getAllTags(): Observable<any[]> {
  //   return this.http.get<any[]>("http://localhost:4000/getCar");
  // }

  // getAllFoodsByTag(tag: string): Observable<any[]> {
  //   // return tag === "All" ?
  //   //   this.getAllTags() : 
  //     return this.http.get<any>(`http://localhost:4000/getCar/${tag}`);
  //     // this.http.get<any[]>("http://localhost:4000/getCar" + tag);
// }


// private FOODS_TAGS_URL="http://localhost:4000/getVehicle/tag/";
// getAllTags(): Observable<any[]> {
//   return this.http.get<any[]>("http://localhost:4000/getVehicle/tag/");
// }

// getAllFoodsByTag(tag: string): Observable<any[]> {
//   return tag === "All" ?
//     this.getCar() :
//     this.http.get<any[]>("http://localhost:4000/getVehicle/tag/" + tag);
// }

} 

