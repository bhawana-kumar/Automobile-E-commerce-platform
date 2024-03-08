import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  
  data=[]; 
  topCars=[];
  topSearch=[];
  topLux=[];
  constructor(private dataService: ProductService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        console.log("response"+response)
        this.data = response;       
        this.topCars=response.slice(6, 10);
        this.topSearch=response.slice(5, 9);
        this.topLux=response.slice(8, 10);
        console.log(this.data)
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }
}
