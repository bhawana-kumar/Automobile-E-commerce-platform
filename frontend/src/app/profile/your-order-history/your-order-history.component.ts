import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Order {
  dateTime: string;
  orderId: string;
  buyerId: string;
  buyer: string;
  sellerId: string;
  seller: string;
  vehicle: string;
  price: string;
}

@Component({
  selector: 'app-your-order-history',
  templateUrl: './your-order-history.component.html',
  styleUrls: ['./your-order-history.component.css']
})
export class YourOrderHistoryComponent implements OnInit {
  orders: Order[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    // Assuming your API endpoint is '/api/orders'
    this.http.get<Order[]>('/api/orders').subscribe(orders => {
      this.orders = orders;
    });
  }
}
