import {  Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';
import * as Utils from '../utils'
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
    // function handleHover(evt:any, item:any, legend:any) {
    //   legend.chart.data.datasets[0].backgroundColor.forEach((color:any, index:any, colors:any) => {
    //     colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
    //   });
    //   legend.chart.update();
    // }
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
      { data: [0, 0, 0], 
        label: this.choosedFilter.toUpperCase(),
        borderColor: Utils.CHART_COLORS.yellow,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow, 0.5),
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
        
      }
     
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
        position: 'bottom'
        // onHover: handleHover,
        // onLeave: handleLeave
      }
    },
    responsive: true
  };

  
  // public chartColors: Array<any> = [
  //   { // first color
  //     backgroundColor: 'white',
  //     borderColor: 'rgba(225,10,24,0.2)',
  //     pointBackgroundColor: 'rgba(225,10,24,0.2)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(225,10,24,0.2)'
  //   },
  //   { // second color
  //     backgroundColor: 'rgba(225,10,24,0.2)',
  //     borderColor: 'rgba(225,10,24,0.2)',
  //     pointBackgroundColor: 'rgba(225,10,24,0.2)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(225,10,24,0.2)'
  //   }];


}
