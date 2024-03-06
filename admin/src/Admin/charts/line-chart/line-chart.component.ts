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
  
  
  constructor(private customerManService: customerManagementService) {
    this.sortedMonths = []
    this.userCounts = [];
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
      // this.lineChartData = [this.piedata[0], this.piedata[1], this.piedata[2]];
      this.lineChartData.labels = this.sortedMonths;
      this.lineChartData.datasets[0].data = this.userCounts;
    }
  }

  filterChartData(): void {
    const userJoinedMonths: string[] = this.linedata.map((user:any) => {
      const joinedDate = new Date(user.joinedDate);
      // Get the month in 'YYYY-MM' format
      return `${joinedDate.getFullYear()}-${(joinedDate.getMonth() + 1).toString().padStart(2, '0')}`;
    });
    
    // Step 2: Count the number of users joined for each month
    const userCountsByMonth: { [month: string]: number } = {};
  
    userJoinedMonths.forEach((month:string) => {
      userCountsByMonth[month] = (userCountsByMonth[month] || 0) + 1;
    });
    
    // Step 3: Prepare data for chart
    const months: string[] = Object.keys(userCountsByMonth); // Extract unique months
    this.sortedMonths = months.sort(); // Sort months array in ascending order
    this.userCounts = this.sortedMonths.map(month => userCountsByMonth[month]); // Get corresponding user counts
    console.log(months);  
    console.log(this.sortedMonths)
    console.log(this.userCounts);
  }
  // getUsersData(){
  //   //get all data from api
  //   this.customerManService.getUserData().subscribe((res)=>{
  //     console.log(res);
  //     this.usersData = res;
    
  //   })
  // }
  // ngOnInit(){
  //   this.getUsersData();
  // }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      

    ],
    datasets: [
      {
        data: [ 0,0,0 ],
        label: 'count Of Users',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      },
      {
        data: [0,0,0], // Data points for the second line
        label: 'Count of Buyers',
        fill: false,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.3)'
      },{
        data: [0,0,0], // Data points for the second line
        label: 'Count of Sellers',
        fill: false,
        tension: 0.5,
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.3)'
      },
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

 
}
