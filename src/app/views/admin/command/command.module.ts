import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandRoutingModule } from './command-routing.module';
import { CommandComponent } from './command.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    CommandComponent
  ],
  imports: [
    CommonModule,
    CommandRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule,
  ]
})
export class CommandModule { }
