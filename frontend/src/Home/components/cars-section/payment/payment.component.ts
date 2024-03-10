
import { Component } from '@angular/core';
import { PaymentService } from '../../../service/payment.service';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  razorpayOptions = {
    key: 'rzp_test_yQ29A3fUd7HhCV',
    amount: '100', 
    currency: 'INR',
    name: 'AutoTrade Hub',
    description: 'Make Payment',
    image: '../assets/images/logo.png', 
    order_id: '', 
    customerName:'',
    handler: (response: any) => {
      // Handle the response from Razorpay
    },
     
    notes: {
      address: 'Thank you'
    },
    theme: {
      color: '#020010'
    }
  };

  rzp: any;

  constructor(private paymentService: PaymentService) {
    this.rzp = new Razorpay(this.razorpayOptions);
  }

  createOrder() {
    this.paymentService.createOrder().subscribe(
      (orderData) => {
        this.razorpayOptions.order_id = orderData.orderId;
        this.razorpayOptions.customerName = orderData.customerName;
        this.razorpayOptions.amount = orderData.amount;
        this.rzp.open();
      },
      (error) => {
        console.error('Error creating order:', error);
      }
    );
  }
}
