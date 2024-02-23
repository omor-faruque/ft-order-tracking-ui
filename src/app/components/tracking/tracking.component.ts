import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {

  trackingId: string = "";
  deliveryStatus:any = {};
  errorStatus:string | undefined;


  constructor(private orderService:OrderService) {

  }

  trackOrder() {
    this.resetStatusMessage();
    if (this.trackingId.trim().length==0) {
      this.errorStatus = "Please Enter a Tracking ID";
      return;
    }

    this.orderService.getDeliveryStatus(this.trackingId).subscribe(
      (response) => {
        this.deliveryStatus = response;
      },
      (error) => {
        this.errorStatus = "Invalid Tracking ID";
      }
    )

  }

  private resetStatusMessage(){
    this.deliveryStatus = {};
    this.errorStatus = "";
  }
}
