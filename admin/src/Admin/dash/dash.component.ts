import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { customerManagementService } from '../adminServices/customerManagement.service';
import { orderManagementService } from '../adminServices/orderManagement.service';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent implements OnInit {

  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );


  usersData: any = [];
  TotalNoOfUsers: number = 0;
  TotalNoOfBuyers: number = 0;
  TotalNoOfSellers: number = 0;
  linedataLoaded: boolean = false;


  ordersData: any = [];
  noOfOrdersCompleted: number = 0;
  noOfOrdersPending: number = 0;
  noOfOrdersOther: number = 0;
  //demo
  piedataLoaded: boolean = false;
  pieDataArray: any = [];
  // orderStatus
  getOrdersCarddata() {
    this.orderManagementService.getOrdersData().subscribe((res) => {
      this.ordersData = res;
      this.ordersData.filter((order: any) => {
        if (order.orderStatus.toLowerCase() === "delivered") {
          this.noOfOrdersCompleted++;
        } else if (order.orderStatus.toLowerCase() === 'pending') {
          this.noOfOrdersPending++;
        } else {
          this.noOfOrdersOther++;
        }
      })
      this.pieDataArray[0] = this.noOfOrdersCompleted;
      this.pieDataArray[1] = this.noOfOrdersPending;
      this.pieDataArray[2] = this.noOfOrdersOther;
      this.piedataLoaded = true;

    });
  }

  getUsersCarddata() {
    this.customerManagementService.getUserData().subscribe((res) => {
      this.usersData = res;
      this.TotalNoOfUsers = this.usersData.length;
      this.usersData.filter((user: any) => {
        if (user.role === 'buyer') {
          this.TotalNoOfBuyers++;
        } else {
          this.TotalNoOfSellers++;
        }
      });
      this.linedataLoaded = true;
    })
  }

  constructor(private customerManagementService: customerManagementService, private orderManagementService: orderManagementService) {

  }

  ngOnInit() {
    this.getUsersCarddata();
    this.getOrdersCarddata();
  }

}
