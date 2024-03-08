import { Component, Input, OnInit, input } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { customerManagementService } from '../../adminServices/customerManagement.service';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: [ './line-chart.component.css' ]
})
export class salesChartComponent {
  @Input() linedata:any = [];
  sortedMonths:string[];
  userCounts:number[];
  buyerCounts:number[];
  sellerCounts:number[];
  
  
  constructor() {
    this.sortedMonths = []
    this.userCounts = [];
    this.buyerCounts = [];
    this.sellerCounts = [];
  }
  ngOnInit(): void {
    this.filterChartData();
    this.updateChart();
  }

  // Update the chart data when data changes
  ngOnChanges(): void {
    this.updateChart();
  }
  updateChart(): void {
    if (this.sortedMonths && this.sortedMonths.length != 0) {
      this.lineChartData.labels = this.sortedMonths;
      this.lineChartData.datasets[0].data = this.userCounts;
      this.lineChartData.datasets[1].data = this.buyerCounts;
      this.lineChartData.datasets[2].data = this.sellerCounts;
    }
  }

  filterChartData(): void {

    const userJoinedMonths: string[] = this.linedata.map((user:any) => {
      const joinedDate = new Date(user.createdAt);
      return `${joinedDate.getFullYear()}-${(joinedDate.getMonth() + 1).toString().padStart(2, '0')}-${user.role}`;
    });
    
    const userCountsByMonth: { [month: string]: number } = {};
    const buyerCountsByMonth: {[month: string]: number } = {};
    const sellerCountsByMonth: {[month: string]: number } = {};

    userJoinedMonths.forEach((month:string) => {
      let newmonth = month.substring(0, 7);
      userCountsByMonth[newmonth] = (userCountsByMonth[newmonth] || 0) + 1;
      if(month.includes('buyer')){
        buyerCountsByMonth[newmonth] = (buyerCountsByMonth[newmonth] || 0)+1;
       
      }else{
        sellerCountsByMonth[newmonth] = (sellerCountsByMonth[newmonth] || 0) + 1;
      }

    });
    console.log(sellerCountsByMonth)
    const months: string[] = Object.keys(userCountsByMonth); 
    this.sortedMonths = months.sort(); 
    this.userCounts = this.sortedMonths.map(month => userCountsByMonth[month]); 
    this.buyerCounts = this.sortedMonths.map(month => buyerCountsByMonth[month]); 
    this.sellerCounts = this.sortedMonths.map(month => sellerCountsByMonth[month]); 
    
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      
    ],
    datasets: [
      {
        data: [0, 0, 0],
        label: 'Count Of Users',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        borderWidth: 2
      },
      {
        data: [0, 0, 0],
        label: 'Count of Buyers',
        fill: false,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        borderWidth: 2
      },
      {
        data: [0, 0, 0],
        label: 'Count of Sellers',
        fill: false,
        tension: 0.5,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        borderWidth: 2
      }
    ]
    
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  
  };
  public lineChartLegend = true;

 
}
