import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  headers: HttpHeaders | undefined;
  token: string | undefined;

  private config = {
    hostName: "http://localhost:8080",
    orders: "/api/orders",
    trackingUrl: "/api/orders/status?trackingId=",

  }

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = this.authService.getToken();
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }


  getOrders() {
    if (this.token) {
      return this.http.get<any>(this.config.hostName, { headers: this.headers });
    } else {
      return null;
    }
  }

  getDeliveryStatus(trackingId: string): Observable<any> {
    return this.http.get<any>(this.config.hostName + this.config.trackingUrl + trackingId);
  }
}
