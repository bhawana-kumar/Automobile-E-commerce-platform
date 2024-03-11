
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { CarfilterService } from '../../../service/carfilter.service';
import { StorageService } from '../../../../Signup/service/storage.service';
import { tap } from 'rxjs/operators';
declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  vehicleId: string = '';
  payment: any = {
    dateTime: Date,
    buyerId: '',
    buyer: {
      name: "",
      contactNumber: "",
      address: ""
    },
    sellerId: '',
    seller: {
      name: "",
      contactNumber: "",
      address: ""
    },
    vehicleId: '',
    vehicle: {
      registrationNumber: "",
      VIN: "",
      brand: "",
      model: "",
      year: "",
      mileage: "",
      color: ""
    },
    price: '',
    paymentMethod: '',
    orderStatus: ''
  };


  razorpayOptions = {
    key: 'rzp_test_j8Crb5YuAOVNvN',
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

  constructor(private http: HttpClient, private carfilter: CarfilterService, private route: ActivatedRoute, private storageService: StorageService) {

  }
  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.payment.vehicleId = params['id'];
        this.vehicleId = this.route.snapshot.params['id'];
      });
    this.rzp = new Razorpay(this.razorpayOptions);
  }
  submitForm() {
    if (!this.storageService.getUser().id) {
      console.log("please login");
      return
    }


    this.carfilter.getCarById(this.vehicleId).pipe(
      tap((data: any) => {
        this.payment.dateTime  = new Date().toISOString();
        this.payment.buyerId = this.storageService.getUser().id;
        this.payment.buyer.name = this.storageService.getUser().username;
        this.payment.buyer.contactNumber = "123456789"; //1. take this value from user service
        this.payment.buyer.address = "abc apartment";
        this.payment.sellerId = data.sellerId;
        this.payment.seller.name = "temp"; //2. take this values from sellers service
        this.payment.seller.contactNumber = "123456789";
        this.payment.seller.address = "def apartment" 
        this.payment.vehicleId = this.vehicleId;
        this.payment.vehicle.registrationNumber = data.registration_number;
      this.payment.vehicle.VIN = data.identification_number;
      this.payment.vehicle.brand= data.brandName;
      this.payment.vehicle.model= data.carName;
      this.payment.vehicle.year= "feild is not in database"; //3.update this field in vehicle database
      this.payment.vehicle.mileage =data.mileage;
      this.payment.vehicle.color =data.color;
        this.payment.price = data.price;
        this.payment.paymentMethod = "Credit card"; 
        this.payment.orderStatus = 'pending'; //default
      })
    ).subscribe(() => {
      console.log(this.payment);
      this.http.post<any>('http://localhost:4000/payment/createPayment', this.payment)
        .subscribe(response => {
          console.log('Payment submitted successfully:', response);

        }, error => {
          console.error('Error submitting report:', error);
        });

        //4.update vehicle status to sold using patch cod below 





        //5.now change collection from payments to orders, payment is done!
    });

    this.rzp.open()
  }

}
