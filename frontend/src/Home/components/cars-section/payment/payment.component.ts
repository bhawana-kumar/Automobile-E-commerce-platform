import { Component } from '@angular/core';
import { PaymentService } from '../../../service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor(private razorpayService: PaymentService) {}

  makePayment() {
    this.razorpayService.createOrder();
  }
}


 
// import { Component } from '@angular/core';
// import { PaymentService } from '../../../service/payment.service';

// @Component({
//     selector: 'app-payment',
//     templateUrl: './payment.component.html',
//   styleUrl: './payment.component.css'
// })
// export class PaymentComponent {
//   constructor(private razorpayService: PaymentService) {}

//   makePayment() {
//     const orderData = {
//       // Add necessary data for creating the order on the server side
//     };

//     this.razorpayService.initiatePayment(orderData);
//   }
// }
