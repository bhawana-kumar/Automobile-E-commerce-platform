import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarfilterService {
  
  private apiUrl = 'http://localhost:4000/cars';

  constructor(private http: HttpClient) { }

  findCarDetails(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:4000/getCar');
  }

  getCarById(carId: String): Observable<any> {
    
    const url = `http://localhost:4000/getCar/${carId}`;
    return this.http.get<any>(url);
   }
  getCar(): Observable<any> {
    return this.http.get<any>("http://localhost:4000/getCar"); // Assuming your API returns car data as JSON
  }

  fetchDescription(carId: number): Observable<string> {
const url = `http://localhost:4000/getcars/${carId}`;

    return this.http.get<string>(`${url}/${carId}`);
  }
} 

