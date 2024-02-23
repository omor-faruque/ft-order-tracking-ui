import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private config = {
    hostName:"http://localhost:8080",
    trackingUrl:"/api/orders/status?trackingId="
  }

  constructor(private http:HttpClient) { }


  getDeliveryStatus(trackingId:string):Observable<any> {
    return this.http.get<any>(this.config.hostName+this.config.trackingUrl+trackingId);
  }
}
