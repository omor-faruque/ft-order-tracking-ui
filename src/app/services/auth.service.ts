import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/api/auth/signin';

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json' // Set the Content-Type header to JSON
  });

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<any>(this.authUrl, body, { headers: this.headers });
  }

  storeToken(token: string): void {
    const currentTime = new Date().getTime(); 
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('tokenTime', currentTime.toString()); 
  }

  getToken(): string {
    return localStorage.getItem('jwtToken') || "";
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('jwtToken');
    return !!token && !this.isTokenExpired(); // Returns true if token exists, false otherwise
  }

  getTokenTime(): number | null {
    const tokenTime = localStorage.getItem('tokenTime');
    return tokenTime ? parseInt(tokenTime, 10) : null; // Parse the stored timestamp string to a number
  }

  isTokenExpired(): boolean {
    const tokenTime = this.getTokenTime();
    if (tokenTime) {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - tokenTime;
      const thirtyMinutesInMillis = 30 * 60 * 1000; // 30 minutes in milliseconds
      return timeDifference > thirtyMinutesInMillis;
    }
    return true; // If token time is not found, consider it expired
  }

  signOut(): void {
    localStorage.removeItem('jwtToken'); // Remove the JWT token from local storage
    localStorage.removeItem('tokenTime'); // Remove the token time from local storage
  }

}
