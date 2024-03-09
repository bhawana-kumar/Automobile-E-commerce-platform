import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-your-order-history',
  templateUrl: './your-order-history.component.html',
  styleUrls: ['./your-order-history.component.css']
})
export class YourOrderHistoryComponent {

  orders: any[] = [];
  errorMessage: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    const orderIdData: any = sessionStorage.getItem('auth-user');
    const orderId: any = JSON.parse(orderIdData).id

    if (orderId !== null) { // Check if orderId is not null
      this.userService.getOrders(orderId).subscribe(
        (data: any) => {
          this.orders = data;
          console.log(this.orders);

          
        },
        (error: any) => {
          this.errorMessage = error;
        }
      );
    } else {
      console.error('auth-user is null');
      // Handle the case where auth-user is null, maybe redirect or show an error message
    }
  }
}