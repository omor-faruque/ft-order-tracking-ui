import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {

  trackingId: string = "";
  deliveryStatus:any = {};
  errorStatus:string | undefined;


  constructor(private orderService:OrderService) {

  }

  trackOrder() {
    this.errorStatus = "";
    if (this.trackingId.trim().length==0) {
      this.errorStatus = "Please Enter a Tracking ID";
      return;
    }

    this.orderService.getDeliveryStatus(this.trackingId).subscribe(
      (response) => {
        this.deliveryStatus = response;
        this.clearTrackingId();
      },
      (error) => {
        this.errorStatus = "Invalid Tracking ID";
        this.clearTrackingId();
      }
    )

  }

  private clearTrackingId(){
    this.trackingId = "";
  }

}
