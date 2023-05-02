import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationCommandRoutingModule } from './validation-command-routing.module';
import { ValidationCommandComponent } from './validation-command.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ValidationCommandComponent
  ],
  imports: [
    CommonModule,
    ValidationCommandRoutingModule,
    HighchartsChartModule,
    FormsModule
  ]
})
export class ValidationCommandModule { }
