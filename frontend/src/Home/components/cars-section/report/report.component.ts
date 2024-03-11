import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { CarfilterService } from '../../../service/carfilter.service';

interface Report {
  comment: string;
  vehicleId: string;
  buyerId: string;
  buyerName: string;
  sellerId: string;
  sellerName: string;
  vehicleRegistrationNumber: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  car:any={};
  report: Report = {
    comment: '',
    vehicleId: '',
    buyerId: '',
    buyerName: '',
    sellerId: '',
    sellerName: '',
    vehicleRegistrationNumber: '',
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private carfilter:CarfilterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.report.vehicleId = params['id'];
        
      }
    );
    const carId = this.route.snapshot.params['id'];
    this.carfilter.getCarById(carId).subscribe((data: any) => {
      // Assuming 'data' contains the seller_id property
      this.car.sellerId = data.sellerId;
      console.log('Car:', this.car)
 
     this.car.registration_number = data.registration_number;
      console.log('Car:', this.car)
    });
  
  }
  
  
  // this.car.seller_id = params['id']; 

  submitForm() {
    this.http.post<any>('http://localhost:4000/report/createReport', this.report)
      .subscribe(response => {
        console.log('Report submitted successfully:', response);
        this.resetForm();
      }, error => {
        console.error('Error submitting report:', error);
      });
  }

  resetForm() {
    this.report = {
      comment: '',
      vehicleId: '',
      buyerId: '',
      buyerName: '',
      sellerId: '',
      sellerName: '',
      vehicleRegistrationNumber: '',
    };
  }
}
