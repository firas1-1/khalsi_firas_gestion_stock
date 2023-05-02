import { Component, OnInit } from '@angular/core';
import { AuthadminService } from '../../services/authadmin.service';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-validation-command',
  templateUrl: './validation-command.component.html',
  styleUrls: ['./validation-command.component.css']
})
export class ValidationCommandComponent implements OnInit {
    chartOptions = {};
    Highcharts = Highcharts;
    
    constructor(private ds:DataService) {}
  data:any
    ngOnInit(): void {
      this.ds.getAllProduct().subscribe(data=>{this.data=data,console.log("good",this.data)})
  

  this.chartOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Number of Students'
    },
    xAxis: {
      categories: ['Total'],
      data: [1,2,3,2]
    },
    yAxis: {
      title: {
        text: 'Number of Students',
        value: [1,2]
        
      }
    },
    series: [{
      name: 'Students',
      data: [1,2]
    }]
  };
  
      // Create the chart
      Highcharts.chart('chart-container', this.chartOptions);
  
  }
    }


