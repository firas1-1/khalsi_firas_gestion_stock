import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllstudentsRoutingModule } from './allstudents-routing.module';
import { AllstudentsComponent } from './allstudents.component';
import {FormsModule} from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [
    AllstudentsComponent
  ],
  imports: [
    CommonModule,
    AllstudentsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    
    MatExpansionModule
    
    

    
    
    
  ]
})
export class AllstudentsModule { }
