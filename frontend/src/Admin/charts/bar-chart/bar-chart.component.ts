import {  Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class barChartComponent {
  @Input() bardata: any = [];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;


  choosedFilter: string = 'location';
  filters = [
    {value: 'location', viewValue: 'Location'},
    {value: 'fuelType', viewValue: 'Fuel'},
    {value: 'bodyType', viewValue: 'Bodytype'},
    {value: 'status', viewValue: 'Status'}
  ];

  constructor() {

  }

  ngOnInit() {
    this.filterChartbyDropdown(this.choosedFilter);
    console.log(this.choosedFilter);
  }
  onFilterChange(){
    console.log(this.choosedFilter);
    this.filterChartbyDropdown(this.choosedFilter);
  }


  updateChart(labels: any, values: any): void {
    if (labels && labels.length != 0) {
      console.log(labels)
      console.log(values)
      this.barChartData.labels = labels;
      this.barChartData.datasets[0].data = values;
      this.barChartData.datasets[0].label = this.choosedFilter.toUpperCase()
    }
   
  }

  filterChartbyDropdown(att:string) {
    const vehicleAtt: string[] = this.bardata.map((vehicle: any) => {
      return vehicle[att]
    })
    const vehicleCounts: {[key:string]:number} = {}
    vehicleAtt.forEach((value)=>{
      vehicleCounts[value] = (vehicleCounts[value] || 0) + 1;
    });
   
    this.updateChart(Object.keys(vehicleCounts), vehicleCounts);
    
    this.chart?.update();
  }

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['', '', ''],
    datasets: [
      { data: [0, 0, 0], label: this.choosedFilter.toUpperCase() }
     
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {},
      y: {},
    },
    plugins: {
      legend: {
        display: true,
      }
    },
    responsive: true
  };


}
