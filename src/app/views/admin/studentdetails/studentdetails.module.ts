import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentdetailsRoutingModule } from './studentdetails-routing.module';
import { StudentdetailsComponent } from './studentdetails.component';
import { StockinitialComponent } from '../stockinitial/stockinitial.component';
import { StockinitialModule } from '../stockinitial/stockinitial.module';


@NgModule({
  declarations: [
    StudentdetailsComponent,
     
  ],
  imports: [
    CommonModule,
    StudentdetailsRoutingModule,
    StockinitialModule
  ]
})
export class StudentdetailsModule { }
