import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  razorpayOptions = {
    key: 'rzp_test_yQ29A3fUd7HhCV',
    amount: 100, 
    currency: 'INR',
    name: 'AutoTrade Hub',
    description: 'Make Payment',
    image: '../assets/images/logo.png', 
    order_id: '', 
    handler: function(response: any) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: 'John  Doe',
      email: 'autotrade@hub.com',
      contact: '988756231478'
    },
    notes: {
      address: 'Thank you'
    },
    theme: {
      color: '#020010'
    }
  };

  rzp: any;

  constructor() {
    this.rzp = new Razorpay(this.razorpayOptions);
  }

  createOrder() {
    // Call your server to create an order and get the order ID
    // Once you have the order ID, set it in razorpayOptions
    // this.razorpayOptions.order_id = 'YOUR_ORDER_ID';

    this.rzp.open();
  }
}




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// declare var Razorpay: any;

// @Injectable({
//   providedIn: 'root'
// })
// export class PaymentService {
//   razorpayOptions:any = {
//     key: 'rzp_test_yQ29A3fUd7HhCV',
//     // Other options...
//   };

//   rzp: any;

//   constructor(private http: HttpClient) {
//     this.rzp = new Razorpay(this.razorpayOptions);
//   }

//   createOrder(data: any) {
//     return this.http.post(`http://localhost:4000/order`, data);
//   }

//   initiatePayment(orderData: any) {
//     this.createOrder(orderData).subscribe((response: any) => {
//       // Once you have the order ID from the server, set it in razorpayOptions
//       this.razorpayOptions.order_id = response.order_id;
      
//       // Open the Razorpay payment modal
//       this.rzp.open();
//     }, (error) => {
//       console.error('Error creating order:', error);
//     });
//   }
// }
