import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = 'http://localhost:4000'; // Replace with your actual endpoint
    return this.http.get(url+"/getProduct");
  }
}
