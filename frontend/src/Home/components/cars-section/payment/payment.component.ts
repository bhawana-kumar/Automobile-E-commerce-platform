
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { CarfilterService } from '../../../service/carfilter.service';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  payment: any= {
    vehicleId:'',
    buyerName: '',
    registration_number:'',
    seller_id:'',
    carName:'',
    brandName:'',
    price:'',
    manufYear:'',
    color:'',
  };


  razorpayOptions = {
    key: 'rzp_test_yQ29A3fUd7HhCV',
    name: 'AutoTrade Hub',
    description: 'Make Payment',
    image: '../assets/images/logo.png', 
    notes: {
      address: 'Thank you'
    },
    theme: {
      color: '#020010'
    }
  };

  rzp: any;

  constructor( private http:HttpClient, private carfilter:CarfilterService,private route:ActivatedRoute) {
    this.rzp = new Razorpay(this.razorpayOptions);
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.payment.vehicleId = params['id'];
      
    
    const carId = this.route.snapshot.params['id'];
    this.carfilter.getCarById(carId).subscribe((data: any) => {
      this.payment.seller_id = data.seller_id;
     this.payment.registration_number = data.registration_number;
     this.payment.carName = data.carName;
     this.payment.price = data.price;
     this.payment.manufYear = data.manufYear;
     this.payment.brandName = data.brandName;
     this.payment.color = data.color;
    });
  });
  }
  submitForm() {
    this.http.post<any>('http://localhost:4000/payment/createPayment', this.payment)
      .subscribe(response => {
        console.log('Payment submitted successfully:', response);
        
      }, error => {
        console.error('Error submitting report:', error);
      });
      this.rzp.open()
  }

}
