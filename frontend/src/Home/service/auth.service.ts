//Please make changes in these code as per loginand signup requirements. 
//It is created to support userschema.js file.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://your-backend-api-url/auth'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  // Login method to authenticate user
  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData)
      .pipe(
        map(user => {
          // Store user details in local storage to persist user session
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }),
        catchError(error => {
          // Handle authentication errors
          console.error('Login failed:', error);
          return of(null);
        })
      );
  }

  // Logout method to clear user session
  logout(): void {
    // Remove user details from local storage upon logout
    localStorage.removeItem('currentUser');
  }

  // Method to get the current logged-in user
  getCurrentUser(): any {
    // Retrieve user details from local storage
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  // Get authentication token for API requests
  getAuthToken(): string {
    const currentUser = this.getCurrentUser();
    return currentUser ? currentUser.token : '';
  }
}
