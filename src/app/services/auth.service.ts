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
    localStorage.setItem('jwtToken', token); 
  }

  getToken(): string {
    return localStorage.getItem('jwtToken') || "";
  }


}
