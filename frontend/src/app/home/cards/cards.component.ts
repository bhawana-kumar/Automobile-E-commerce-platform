import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  
  data=[]; 

  constructor(private dataService: ProductService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        console.log("response"+response)
        this.data = response; // Store the data received from the backend
        console.log(this.data)
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }
}
