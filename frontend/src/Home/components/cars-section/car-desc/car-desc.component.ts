import { Component, OnInit } from '@angular/core';
import { CarfilterService } from '../../../service/carfilter.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-car-desc',
  templateUrl: './car-desc.component.html',
  styleUrls: ['./car-desc.component.css']
})
export class CarDescComponent implements OnInit {
  car: any; 
  
  constructor(private router:Router , private route: ActivatedRoute,private carfilter: CarfilterService, private dialog: MatDialog) {} 
  
  ngOnInit(): void {
    const carId = this.route.snapshot.params['id'];
    console.log('Car ID:', carId);
    this.carfilter.getCarById(carId).subscribe((data) => {
      this.car = data; 
    }); 
  // }
  // buynowbtn(price:number){
  //   this.router.navigate(['/payment',price]);
}

toggleReportButton(id: number) {
  this.router.navigate(['/report',id]);
}
createOrder(id: number) {
  this.router.navigate(['/payment',id]);
}

}



