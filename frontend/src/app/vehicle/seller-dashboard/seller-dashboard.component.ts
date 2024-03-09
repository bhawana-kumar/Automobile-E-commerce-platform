
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from '../../Service/seller.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Seller } from '../../../../../backend/Model/sellermodel';
import { AuthService } from '../../Service/auth.service'; 

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  seller: Seller | undefined; // Define a variable of type Seller to hold seller data

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private route: ActivatedRoute,
    private sellerService: SellerService, private authService : AuthService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      //  const sellerId = params.get('id');
      const sellerId ="65e417f974036db3bdb9db74"
      //  const sellerId = this.authService.getCurrentUser();
      if (sellerId) {
        this.fetchSellerInformation(sellerId);
      } else {
        console.error('Seller ID not found in route parameters');
      }
    });
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
