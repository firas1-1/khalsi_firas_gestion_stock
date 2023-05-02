import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentdetailsRoutingModule } from './studentdetails-routing.module';
import { StudentdetailsComponent } from './studentdetails.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    StudentdetailsComponent
  ],
  imports: [
    CommonModule,
    StudentdetailsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

  ]
})
export class StudentdetailsModule { }
