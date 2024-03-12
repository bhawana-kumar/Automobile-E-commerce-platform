
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../../Home/service/seller.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Seller } from '../../../../backend/model/sellerModel';
import { AuthService } from '../../Home/service/auth.service'; 



@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  seller: Seller | undefined; // Define a variable of type Seller to hold seller data
  sellerId:any = '';
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sellerService: SellerService, private authService : AuthService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.sellerId = params.get('id');
     
     
      if (this.sellerId) {
        this.fetchSellerInformation(this.sellerId);
      } else {
        console.error('Seller ID not found in route parameters');
      }
    });
  }
  gotoAddVehicle(){
    const url = `/add-vehicle/${this.sellerId}`;
    this.router.navigateByUrl(url);
    }

    gotoFetchVehicle(){
      const url = `/fetch-vehicle/${this.sellerId}`;
      this.router.navigateByUrl(url)
    }
  
    fetchSellerInformation(sellerId: string) {
    this.sellerService.getSellerInformation(sellerId).subscribe(
      (data: Seller) => { // Specify the type of data as Seller
        this.seller = data; // Assign received data to the seller variable
      },
      (error: any) => {
        console.error('Error fetching seller information:', error);
      }
    );
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}