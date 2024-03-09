// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Report {
//   comment: string;
//   vehicleId: string;
//   buyerId: string;
//   buyerName:string;
//   sellerId:string;
//   sellerName:string;
//   vehicleRegistrationNumber:string;
// }

// @Component({
//   selector: 'app-report',
//   templateUrl: './report.component.html',
//   styleUrls: ['./report.component.css']
// })
// export class ReportComponent {
//   report: Report = {
//     comment: '',
//     vehicleId: '',
//     buyerId: '',
//     buyerName: '',
//     sellerId: '',
//     sellerName: '',
//     vehicleRegistrationNumber: '',
//   };

//   constructor(private http: HttpClient) { }

//   submitForm() {
//     this.http.post<any>('http://localhost:4000/report/createReport', this.report)
//       .subscribe(response => {
//         console.log('Report submitted successfully:', response);
//         this.resetForm();
//       }, error => {
//         console.error('Error submitting report:', error);
//       });
//   }

//   resetForm() {
//     this.report = {
//       comment: '',
//       vehicleId: '',
//       buyerId: '',
//       buyerName: '',
//       sellerId: '',
//       sellerName: '',
//       vehicleRegistrationNumber:'',
//     };
//   }
// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

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
  report: Report = {
    comment: '',
    vehicleId: '',
    buyerId: '',
    buyerName: '',
    sellerId: '',
    sellerName: '',
    vehicleRegistrationNumber: '',
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.report.vehicleId = params['id'];
      }
    );
  }
  //   this.route.paramMap.subscribe(params => {
  //     const vehicleId = params.get('vehicleId');
  //     if (vehicleId) {
  //       this.report.vehicleId = vehicleId;
  //     }
  //   });
  // }

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
